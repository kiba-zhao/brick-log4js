/**
 * @fileOverview 工具类
 * @name utils.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const assert = require('assert');
const { assign, isString, isSymbol } = require('lodash');

const { INJECT_ADDIN } = require('./constants');

/**
 * 日志记录可选项
 * @typedef {Object} LoggerOpts
 * @property {String | Symbol} property 实例属性名称
 * @property {String} name 日志对象名称
 */

/**
 * 日志对象设置函数,将日志对象设置为对象属性
 * @param {any} target 注入对象
 * @param {LoggerOpts} opts 日志对象可选项
 */
function logger(target, opts) {
  const { property, name } = assign({ property: 'logger' }, opts);
  assert(target !== undefined || target !== null, 'log4js Error: wrong target');
  assert(name === undefined || isString(name), 'log4js Error: wrong logger name');
  assert(isString(property) || isSymbol(property), 'log4js Error: wrong property');

  if (target[INJECT_ADDIN] === undefined) {
    target[INJECT_ADDIN] = {};
  }
  const addin = target[INJECT_ADDIN];
  assert(addin[property] === undefined, 'log4js Error: duplicate');

  addin[property] = { id: 'log4js', required: true, transform: log4js => getLogger(log4js, name) };

}

/**
 * 获取logger
 * @param {log4js} log4js log4js对象
 * @param {String} name logger名称
 * @return {log4js.Logger} logger对象实例
 */
function getLogger(log4js, name) {
  if (!log4js) { return log4js; }
  if (!name) { return log4js.getLogger(); }
  return log4js.getLogger(name);
}

exports.logger = logger;
