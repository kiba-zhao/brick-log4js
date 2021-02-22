/**
 * @fileOverview 提供器入口
 * @name xprovide.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { createLog4js } = require('.');

module.exports = provider => {

  provider.require([ 'boot', 'inject', 'config' ], (boot, inject, config) => setup(provider, boot, inject, config.log4js));

};

function setup(provider, boot, inject, config) {

  if (!config) {
    return;
  }

  const log4js = createLog4js(config.configure);
  if (!config.patterns) {
    provider.define('log4js', [], log4js);
    return;
  }

  const loader = boot.createBootLoader(config.patterns, boot.context, config.opts || {});
  const store = { log4js };
  const injector = inject.createInjector(loader, { store, addins: inject.addins });
  provider.define('log4js', injector.deps, factory.bind(this, injector, log4js));

}

function factory(injector, log4js, ...args) {
  const modules = injector.create(...args);
  let value = modules.next();
  while (value.done === false) {
    value = modules.next();
  }

  return log4js;
}
