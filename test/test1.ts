/*
 * @Descripttion: 
 * @version: 
 * @Author: wangjunwei
 * @Date: 2020-07-27 23:49:05
 * @LastEditors: wangjunwei
 * @LastEditTime: 2020-08-01 23:27:41
 */ 
import { WechatyBaiduUnit } from '../src/mod'
//const WechatyBaiduUnit = require("../src/plugin.ts")
//import { Wechaty } from 'wechaty'

const config = {
  baidu_apikey : 'Adwf4v3V7wa1CiN5WloH2PkP',
  baidu_secretkey :'rQn3Tap4pcahCBSwdjihxyv3oZTKWFcZ',
  service_id: 'S31458',
}

let BaiduUnitPlugin =  WechatyBaiduUnit("nihao")

console.log("=============================")
console.log(BaiduUnitPlugin)
console.log("=============================")

export { }

