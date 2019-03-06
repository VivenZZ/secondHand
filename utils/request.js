class Request{
  constructor (parms) {
    this.baseUrl = parms.baseUrl
  }
  get (url, data) {
    return this.request('GET', url, data)
  }
  post(url, data) {
    return this.request('POST', url, data)
  }
  put(url, data) {
    return this.request('PUT', url, data)
  }
  request (method, url, data) {
    const vm = this
    return new Promise( (resolve, reject) =>{
      wx.request({
        url: vm.baseUrl + url,
        data,
        method,
        success (res) {
          resolve(res)
        },
        fail () {
          reject({
            msg: '请求失败',
            url: vm.baseUrl + url,
            method,
            data
          })
        }
      })
    })
  }
}
const request = new Request({
  baseUrl: 'https://www.easy-mock.com/mock/5c7df07ac05ec81060cf5443/test/'
})
module.exports = request