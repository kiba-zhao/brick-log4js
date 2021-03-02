/**
 * @fileOverview log4js日志插件
 * @name index.js
 * @author kiba.x.zhao <kiba.rain@qq.com>
 * @license MIT
 */
'use strict';

const { LOG4JS } = require('./lib/constants');
const { logger } = require('./lib/utils');

exports.logger = logger;
exports.LOG4JS = LOG4JS;
