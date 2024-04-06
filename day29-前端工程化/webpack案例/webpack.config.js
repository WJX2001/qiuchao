const path = require('path')



module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/' // 设置公共路径，用于在HTML文件中引用资源
  },
  module: {
    rules: [
      {
        test: /.md$/,
        use: './markdown-loader'
      }
    ]
  }
}