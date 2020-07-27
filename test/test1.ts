import { WechatyBaiduUnit } from 'wechaty-baiduunit'
import { Wechaty } from 'wechaty'

const config = {
  mention: true, // default true: require mention the bot in room.
  room: true,
  contact: true, // enable direct message.

  /**
   * BaiduUnit Service API
   */
  baidu_apikey : 'Adwf4v3V7wa1CiN5WloH2PkP',
  baidu_secretkey :'rQn3Tap4pcahCBSwdjihxyv3oZTKWFcZ',
  service_id: 'S31458',
}

const BaiduUnitPlugin = WechatyBaiduUnit(config)

const wechaty = new Wechaty()
wechaty.use(BaiduUnitPlugin)