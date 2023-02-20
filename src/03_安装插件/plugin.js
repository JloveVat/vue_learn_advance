// 安装插件
app.use({
  install: function (app) {
    console.log('传入对象的install被执行:', app)
  }
})

// 函数形式
app.use(function (app) {
  console.log('传入函数被执行:', app)
})
