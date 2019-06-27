// 本地js名称
const componentsScriptList = [
  'z-card',
  'z-nav',
  'z-section'
]

// 生成script函数
const _scriptElement = function (e) {
  let _new = document.createElement('script');
  _new.src = e;
  return _new;
}

// 注册函数
const _install  = function () {
  for(let i of componentsScriptList) {
    document.head.appendChild(_scriptElement(`http://fdfinger.github.io/static/components/${i}.js`))
  }
}

_install();