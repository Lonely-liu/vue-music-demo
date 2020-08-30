import originJsonp from 'jsonp'

export default function (url, data, options) {
  url = (url.includes('?') ? '&' : '?') + getParams(data)
  return new Promise((resolve, reject) => {
    originJsonp(url, options, (err, data) => {
      if(!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function getParams(data) {
  let url = ''
  for (const key in data) {
    const value = data[key]
    url += `&${key}=${value}`
  }
  return url.substr(1)
}