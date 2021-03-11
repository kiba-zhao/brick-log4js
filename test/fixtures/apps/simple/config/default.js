/**
 * @fileOverview 默认配置
 * @name default.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';
exports.engine = {
  modules: { modules: { patterns: 'modules/**/*.js' } },
};

exports.log4js = {
  appenders: {
    out: { type: 'stdout' },
  },
  categories: {
    default: { appenders: [ 'out' ], level: 'debug' },
    logger1: { appenders: [ 'out' ], level: 'debug' },
  },
};
