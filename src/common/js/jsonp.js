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
        console.log('k:', k, 'data[k]:', data[k])
        url += `&${k}=${encodeURIComponent(value)}`
        console.log(url)
    }
    return url ? url.substring(1) : ''
}