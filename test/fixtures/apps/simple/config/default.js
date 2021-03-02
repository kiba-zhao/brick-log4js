/**
 * @fileOverview 默认配置
 * @name default.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { ENGINE } = require('brick-engine');
const { LOG4JS } = require('../../../../..');

exports[ENGINE] = {
  modules: { modules: { patterns: 'modules/**/*.js' } },
};

exports[LOG4JS] = {
  appenders: {
    out: { type: 'stdout' },
  },
  categories: {
    default: { appenders: ['out'], level: 'debug' },
    logger1: { appenders: ['out'], level: 'debug' },
  },
};
