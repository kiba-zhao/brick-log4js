/**
 * 日志记录可选项
 */
export type LoggerOpts = {
    /**
     * 实例属性名称
     */
    property: string | Symbol;
    /**
     * 日志对象名称
     */
    name: string;
};
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
 * @return {any} 注入对象
 */
export function logger(target: any, opts: LoggerOpts): any;
