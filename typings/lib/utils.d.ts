/**
 * 注入logger对象到实例属性
 * @param {any} target 注入对象
 * @param {String} name logger名称
 * @param {String | Symbol} property 实例属性名称
 */
export function logger(target: any, name: string, property?: string | Symbol): void;
