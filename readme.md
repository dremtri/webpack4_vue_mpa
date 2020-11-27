# 功能
1. ...

# 版本
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
4. 配置**eslint**   参考: [ESLint中文官网](http://eslint.cn/docs/user-guide/configuring)


# todo
* webpack 配置优化
* webpack 配置合并
* 引入第三方库
* 封装axios
* 多页面状态管理
* 路由配置
* 图标自动生成
* 打包分析工具
* ...