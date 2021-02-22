/**
 * @fileOverview 工具类
 * @name utils.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const assert = require('assert');
const { isString, isSymbol } = require('lodash');

const { INJECT_ADDIN } = require('./constants');

/**
 * 注入logger对象到实例属性
 * @param {any} target 注入对象
 * @param {String} name logger名称
 * @param {String | Symbol} property 实例属性名称
 */
function logger(target, name, property = 'logger') {

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
