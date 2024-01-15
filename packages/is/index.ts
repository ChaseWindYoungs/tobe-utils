/* eslint-disable @typescript-eslint/no-unsafe-argument */
/**
 * 判断文件
 *
 * 如果你需要类型判断，请不要再使用 Object.prototype.toString.call()方法
 * 直接调用下方封装好的is函数即可
 */

const _toString = Object.prototype.toString

const isType = (t: any, n: string): boolean => _toString.call(t) === `[object ${n}]`

// 判断非undefined
export const isDef = (val: any): boolean => typeof val !== 'undefined'

// 判断是undefined
export const isUnDef = (val: any): boolean => !isDef(val)

// 判断是否是对象
export const isObject = (val: null): boolean => val !== null && toString.call(val) === '[object Object]'

export const isEmpty = (val: any): boolean => {
  if (isArray(val) || isString(val)) return val.length === 0
  if (val instanceof Map || val instanceof Set) return val.size === 0
  if (isObject(val)) return Object.keys(val).length === 0
  return true
}

// 判断是否是时间类型
export const isDate = (val: string): boolean => isType(val, 'Date')

// 判断是否是空类型
export const isVacant = (val: null): boolean => val === ''

// 判断是否是null类型
export const isNull = (val: null): boolean => val === null

// 判断不可访问类型
export const isNullAndUnDef = (val: any): boolean => isUnDef(val) && isNull(val)

// 判断undefined和null其中一个
export const isNullOrUnDef = (val: any): boolean => isUnDef(val) || isNull(val)
// 判断undefined和null其中一个
export const isNullOrUnDefOrVct = (val: any): boolean => isUnDef(val) || isNull(val) || isVacant(val)

// 判断是否是数字类型
export const isNumber = (val: string): boolean => isType(val, 'Number')

// 判断是否是Promise类型
export const isPromise = (val: string): boolean => {
  return (
    isType(val, 'Promise')
  )
}

// 判断是否是字符类型
export const isString = (val: any): boolean => isType(val, 'String')

// 判断是否为函数
export const isFunction = (val: any): boolean => typeof val === 'function'

// 判断是否为booean类型
export const isBoolean = (val: string): boolean => isType(val, 'Boolean')

// 判断是否是正则表达式
export const isRegExp = (val: string): boolean => isType(val, 'RegExp')

// 判断是否是数组
export const isArray = (val: any): boolean => (Boolean(val)) && Array.isArray(val)

// 判断是否是window对象
export const isWindow = (val: string): boolean => typeof window !== 'undefined' && isType(val, 'Window')
