/*
 * @Description: Create By Adam
 * @Author: Adam
 * @Date: 2021-02-07 12:57:43
 * @LastEditTime: 2021-03-07 12:26:11
 * @LastEditor: 2638116094@qq.com
 * @FilePath: \vue-music\src\common\js\jsonp.js
 */
import originJSONP from 'jsonp'
export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    console.log(url)
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err) {
                return resolve(data)
            } else {
                return reject(err)
            }
        })
    })
}
export function param(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
}