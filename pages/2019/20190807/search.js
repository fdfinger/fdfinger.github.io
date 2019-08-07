
// 节生成点
const render = function (html) {
  let ResultDiv = document.querySelector("#result")
  ResultDiv.innerHTML = ''
  for (let a of html) {
    ResultDiv.append(a)
  }
  if (html.length > 0) {
    let inputElement = document.querySelectorAll(".search-box")[0]
    inputElement.className = "search-box-top"
  }
}

// 生成element
const generateElement = function(text) {
  let element = document.createElement("li")
  element.setAttribute('class', 'result-item')

  let questionElement = document.createElement('p')
  questionElement.setAttribute('class', 'question')
  const questionElementText = document.createTextNode(text.question)
  questionElement.appendChild(questionElementText)
  
  let answerElement = document.createElement('p')
  answerElement.setAttribute('class', 'answer')
  const answerElementText = document.createTextNode(text.answer)
  answerElement.appendChild(answerElementText)

  element.appendChild(questionElement)
  element.appendChild(answerElement)

  return element
}

// 生成HTML
const generateHTML = function (list) {
  const _newHTML = list.map(function(item){
    return generateElement(item)
  })
  return _newHTML
}

// 按钮事件
const handleSearch = function(val) {
  if (val) {
    const _newResult = filterData(val)
    const _newHtml = generateHTML(_newResult)
    render(_newHtml)
  } else {
    let ResultDiv = document.querySelector("#result")
    ResultDiv.innerHTML = ''
    let inputElement = document.querySelectorAll(".search-box-top")[0]
    inputElement.className = "search-box"
  }
}

// 过滤数据
const filterData = function(val){
  const _new = questionData.filter(function(item){
    return item.question.indexOf(val) >= 0 || item.answer.indexOf(val) >= 0
  })
  return _new
}

// 按钮事件
const buttonclicked = function(){
  const searchValue = document.querySelector('#search')
  handleSearch(searchValue.value);
}

// 页面加载后
window.onload = function() {
  let searchInput = document.querySelector('#search')
  searchInput.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
      case 13:
        buttonclicked()
        break
    }
  });
}

// 数据 可以使用请求
const questionData = [
  {
    question: "你妈贵姓",
    answer: "姓王"
  },
  {
    question: "你妈贵姓",
    answer: "姓王"
  },
  {
    question: "你妈贵姓",
    answer: "姓王"
  },
  {
    question: "你妈贵姓",
    answer: "姓王"
  },
]