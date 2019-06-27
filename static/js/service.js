const qs = {
  stringify: function (params) {
    let _form = new FormData()
    for(let i of Object.keys(params)) {
      _form.append(i.toString(), params[i])
    }
    return _form
  },
  url: function (url, params) {
    console.log(url, params);
    if (!params) return url
    const _encode = Object.keys(params).map(function(item){
      return `${item}=${params[item]}`
    }).join('&')
    return url + '?' + _encode;
  }
}

class HttpRequest {
  constructor(url, options) {
    this.url = url;
    this.options = options || {}
  }
  get(params) {
    return fetch(qs.url(this.url, params), this.options)
      .then(function(res){
        return res.json()
      })
  }
  post(params) {
    return fetch(this.url, Object.assign(this.options, {
      methods: 'POST',
      body: qs.stringify(params)
    }))
      .then(function(res){
        return res.json()
      })
  }
}


const getPage = function(){
  const Req = new HttpRequest('./json/page.json')
  return Req.get()
}
const getBlog = function(){
  const Req = new HttpRequest('./json/blog.json')
  return Req.get()
}