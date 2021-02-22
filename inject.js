/**
 * @fileOverview 注入附加处理入口
 * @name inject.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { INJECT_ADDIN } = require('./lib/constants');

module.exports = (target) => {
  return target[INJECT_ADDIN];
};
