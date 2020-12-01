# 功能
1. 使用 mockjs mock数据真实模拟前后端分离

# 版本
* nodejs: "14.15.1"
* webpack: "^4.44.2"
* webpack-cli: "^4.2.0",
* webpack-dev-server: "^3.11.0",

# 参考链接
* [https://github.com/lvzhenbang/webpack4.x-multi-page/tree/master/pages](https://github.com/lvzhenbang/webpack4.x-multi-page/tree/master/pages)
* [https://github.com/cnu4/Webpack-Vue-MultiplePage](https://github.com/cnu4/Webpack-Vue-MultiplePage)
* [https://github.com/charleylla/charley-vue-multi](https://github.com/charleylla/charley-vue-multi)

# 目录划分
```
vue_mpa  
    |-- index.html  
    |-- build  
    |   |-- alias.js  
    |   |-- config.js  
    |   |-- module.js  
    |   |-- utils.js  
    |   |-- webpack.base.conf.js  
    |   |-- webpack.dev.conf.js  
    |   |-- webpack.prod.conf.js  
    |-- dist  
    |   |-- another.html  
    |   |-- config.js  
    |   |-- home.html  
    |   |-- js  
    |       |-- another.js  
    |       |-- home.js  
    |-- public  
    |   |-- config.js  
    |-- src  
        |-- assets  
        |-- components  
        |-- pages  
        |   |-- another  
        |   |   |-- main.js  
        |   |   |-- main.vue  
        |   |   |-- components  
        |   |       |-- test.vue  
        |   |-- home  
        |       |-- main.js  
        |       |-- main.vue  
        |       |-- assets  
        |       |-- components  
        |       |   |-- test.vue  
        |       |-- utils  
        |-- utils  
```

# 搭建步骤
1. 配置**webpack**的**entry**, **output**, **resolve**, **plugins** **module**
2. 配置**webpack**开发环境的**devServer**
3. 配置**webpack**生产环境的**optimization**
    1. js压缩优化
    2. css压缩优化
    3. 打包分块
4. 配置**eslint**   参考: [ESLint中文官网](http://eslint.cn/docs/user-guide/configuring)
5. 配置**babel**    参考: [Babel中文官网](https://www.babeljs.cn/docs/config-files)
    1. 备注(babel-loader 使用 @babel/core 的api @babel/core 使用@babel/preset-env 的方法集或者自定义的方法集)
6. 模板文件设置公共配置**head**、**script**、**使用类ejs语法插入变量**
7. 封装axios 参考: [axios中文网](http://axios-js.com/zh-cn/docs/)
    1. ...
8. 本地使用**mockjs**模拟后台响应数据   参考: [mockjs](http://mockjs.com/)
    1. 使用webpack下的devServer下的after注入mock-server中间件   参考: [devServer.after](https://www.webpackjs.com/configuration/dev-server/#devserver-after)
    2. 在mock-server中间件中拦截路由
    3. 根据不同的请求返回mock数据
9. 引入elementUI()
# todo
* webpack 配置优化
* 多进程打包
* 打包静态包缓存
* 引入第三方库
* 封装axios
* 多页面状态管理
* 路由配置
* 图标自动生成
* 打包分析工具
* 国际化
* 将环境变量修改成从文件中获取;```npm install dotenv```
* ...