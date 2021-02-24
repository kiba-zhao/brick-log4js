/**
 * @fileOverview log4js预处理示例
 * @name simple.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { provide } = require('brick-engine');

const ctx = { name: 'simple.js' };
module.exports = () => {
  return ctx;
};

provide(module.exports, { property: 'log4js', dep: 'log4js' });
