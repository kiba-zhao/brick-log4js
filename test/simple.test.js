/**
 * @fileOverview 简单示例测试
 * @name simple.test.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { LOG4JS } = require('..');
const { Engine, inject } = require('brick-engine');
const path = require('path');

const APP_PATH = path.join(__dirname, 'fixtures', 'apps', 'simple');
// const LOG4JS_SIMPLE = require('./fixtures/apps/simple/log4js/simple');
// const MODULE_A = require('./fixtures/apps/simple/modules/moduleA');

describe('simple.test.js', () => {

  let engine;

  beforeAll(() => {
    engine = new Engine({ chdir: APP_PATH });
  });

  beforeEach(() => {
    engine.init();
  });

  afterAll(() => {
    engine = undefined;
  });

  it('success', () => {

    const fn = jest.fn();
    inject(fn, { deps: [LOG4JS, 'modules'] });

    engine.use(fn);

    expect(fn).toBeCalledTimes(1);
    const log4js = fn.mock.calls[0][0];
    const modules = fn.mock.calls[0][1];

    expect(Object.keys(modules)).toEqual(['modelA']);
    expect(modules.modelA.logger).toEqual(log4js.getLogger());
    expect(modules.modelA.logger1).toEqual(log4js.getLogger('logger1'));

  });

});
