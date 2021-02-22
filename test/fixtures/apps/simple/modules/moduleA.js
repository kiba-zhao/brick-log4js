/**
 * @fileOverview 模块A
 * @name moduleA.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { inject } = require('brick-engine');
const { logger } = require('../../../../..');

const ctx = {};
module.exports = () => {
  return ctx;
};

inject(module.exports, [], 'modelA');
logger(module.exports);
logger(module.exports, 'logger1', 'logger1');
