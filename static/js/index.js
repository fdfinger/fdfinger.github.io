// 本地js名称
const scriptList = [
  'service'
]
// 其他远程地址的链接js
const otherScriptList = [
  'https://cdn.bootcss.com/font-awesome/5.10.0-12/js/all.min.js'
]

// 生成script函数
const scriptElement = function (e) {
  let _new = document.createElement('script');
  _new.src = e;
  _new.defer = true;
  return _new;
}

// 注册函数
const install  = function () {
  for(let i of scriptList) {
    document.head.appendChild(scriptElement(`http://fdfinger.github.io/static/js/${i}.js`))
  }
  for(let j of otherScriptList) {
    document.head.appendChild(scriptElement(j))
  }
}

install();