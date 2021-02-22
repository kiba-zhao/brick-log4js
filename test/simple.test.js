/**
 * @fileOverview 简单示例测试
 * @name simple.test.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const xboot = require('xboot');
const xprovide = require('xprovide');
const path = require('path');

const APP_PATH = path.join(__dirname, 'fixtures', 'apps', 'simple');
// const LOG4JS_SIMPLE = require('./fixtures/apps/simple/log4js/simple');
// const MODULE_A = require('./fixtures/apps/simple/modules/moduleA');

describe('simple.test.js', () => {

  let loader;
  let provider;
  const Provider = jest.fn();
  const context = {};

  beforeAll(() => {
    jest.doMock('xprovide', () => ({ Provider }), { virtual: true });
    jest.resetModules();
  });

  beforeEach(() => {
    Provider.mockImplementation((...args) => {
      provider = new xprovide.Provider(...args);
      return provider;
    });
    loader = xboot.createBootLoader('xboot.js', context, { chdir: APP_PATH });
  });

  afterEach(() => {
    Provider.mockReset();
  });


  afterAll(() => {
    jest.dontMock('xprovide');
  });

  it('success', () => {

    const log4jsFn = jest.fn();
    const modulesFn = jest.fn();

    loader.forEach(_ => xboot.setup(_, xboot, context));

    provider.require([ 'log4js' ], log4jsFn);
    provider.require([ 'modules' ], modulesFn);

    expect(Provider).toBeCalledTimes(1);
    expect(Provider).toBeCalledWith();

    expect(log4jsFn).toBeCalledTimes(1);
    const log4js = log4jsFn.mock.calls[0][0];

    expect(modulesFn).toBeCalledTimes(1);
    const modules = modulesFn.mock.calls[0][0];
    expect(Object.keys(modules)).toEqual([ 'modelA' ]);
    expect(modules.modelA.logger).toEqual(log4js.getLogger());
    expect(modules.modelA.logger1).toEqual(log4js.getLogger('logger1'));
    // expect(log4js).toBe(simple.log4js);

  });

});
