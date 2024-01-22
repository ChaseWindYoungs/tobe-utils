/**
 * 将时间转换为 `刚刚`、`几秒前`、`几分钟前`、`几小时前`、`几天前`、几月前或按照传入格式显示
 * @param date
 * @param type
 * @param zeroFillFlag
 * @returns
 */
export const formatPast = (date: string | number | Date, type = 'default', zeroFillFlag = true): string => {
  // 定义countTime变量，用于存储计算后的数据
  let countTime
  // 获取当前时间戳
  let time = new Date().getTime()
  // 转换传入参数为时间戳
  const afferentTime = new Date(date).getTime()
  // 当前时间戳 - 传入时间戳
  time = Number.parseInt(`${time - afferentTime}`)
  let past = ''
  if (time < 10000) {
    // 10秒内
    past = '刚刚'
    return past
  } else if (time < 60000) {
    // 超过10秒少于1分钟内
    countTime = Math.floor(time / 1000)
    past = `${countTime}秒前`
    return past
  } else if (time < 3600000) {
    // 超过1分钟少于1小时
    countTime = Math.floor(time / 60000)
    past = `${countTime}分钟前`
    return past
  } else if (time < 86400000) {
    // 超过1小时少于24小时
    countTime = Math.floor(time / 3600000)
    past = `${countTime}小时前`
    return past
  } else if (time >= 86400000 && type === 'default') {
    // 超过二十四小时（一天）且格式参数为默认"default"
    countTime = Math.floor(time / 86400000)
    // 大于等于365天
    if (countTime >= 365) {
      past = `${Math.floor(countTime / 365)}年前`
      return past
    }
    // 大于等于30天
    if (countTime >= 30) {
      past = `${Math.floor(countTime / 30)}个月前`
      return past
    }
    past = `${countTime}天前`
    return past
  } else {
    // 一天（24小时）以上且格式不为"default"则按传入格式参数显示不同格式
    // 数字补零
    const Y = new Date(date).getFullYear()
    const M = new Date(date).getMonth() + 1
    const zeroFillM = M > 9 ? M : '0' + M
    const D = new Date(date).getDate()
    const zeroFillD = D > 9 ? D : '0' + D
    // 传入格式为"-" "/" "."
    if (type === '-' || type === '/' || type === '.') {
      past = zeroFillFlag
        ? Y + type + zeroFillM + type + zeroFillD
        : Y + type + M + type + D
      return past
    }
    // 传入格式为"年月日"
    if (type === '年月日') {
      past = zeroFillFlag
        ? Y + type[0] + zeroFillM + type[1] + zeroFillD + type[2]
        : Y + type[0] + M + type[1] + D + type[2]
      return past
    }
    // 传入格式为"月日"
    if (type === '月日') {
      past = zeroFillFlag
        ? zeroFillM + type[0] + zeroFillD + type[1]
        : M + type[0] + D + type[1]
      return past
    }
    // 传入格式为"年"
    if (type === '年') {
      past = Y + type
      return past
    }
  }
  return past
}
