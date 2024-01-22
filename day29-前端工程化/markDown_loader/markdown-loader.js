const { marked } = require('marked')

module.exports = source => {
  // console.log(source)
  // return 'console.log(111)'

  const html = marked(source)
  return `export default ${JSON.stringify(html)}`

  // 返回 html 字符串交给下一个loader 处理
  return html
}