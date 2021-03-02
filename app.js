/**
 * @fileOverview 应用入口
 * @name app.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { inject } = require('brick-engine');
const log4js = require('log4js');
const { assign } = require('lodash');
const { LOG4JS } = require('./lib/constants');

module.exports = engine => {

  const config = engine.config[LOG4JS];
  if (!config) {
    return;
  }

  const { patterns, opts, ...options } = config;
  log4js.configure(options);

  if (patterns) {
    engine.build(patterns, assign({ model: false }, opts), setup.bind(this, engine));
  } else {
    setup(engine);
  }

};

function setup(engine) {
  inject(log4js, { name: LOG4JS });
  engine.install(log4js);
}
