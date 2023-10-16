;(function () {
  // 请求主体 传递给服务器的数据格式：FormData/x-www-form-urlencoded/json字符串/Buffer...
  let fm = new FormData()
  fm.append('file', '')
  fm.append('filename', '')
  axios.post('/upload_single', fm).then((response) => {})
  // xxx=xxx&xxx=xxx
  axios.post(
    '/upload_single_base64',
    {
      file: '',
      filename: '',
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
})
