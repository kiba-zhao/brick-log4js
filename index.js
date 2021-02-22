/**
 * @fileOverview log4js日志插件
 * @name index.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const log4js = require('log4js');
const { logger } = require('./lib/utils');

function createLog4js(opts) {
  if (opts) { log4js.configure(opts); }
  return log4js;
}

exports.createLog4js = createLog4js;

exports.logger = logger;
