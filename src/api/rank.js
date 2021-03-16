/*
 * @Description: Create By Adam
 * @Author: Adam
 * @Date: 2021-02-27 18:38:28
 * @LastEditTime: 2021-03-08 21:06:23
 * @LastEditor: 2638116094@qq.com
 * @FilePath: \vue-music\src\api\rank.js
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 0, 
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getMusicList(topid) {
  console.log('topid', topid)
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  
  const data = Object.assign({}, commonParams, {
    topid,
    page: 'detail',
    type: 'top',
    tpl: 3,
    platform: 'h5',
    needNewCode: 1,
  })
  return jsonp(url, data, options)
}
