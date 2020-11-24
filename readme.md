# 参考链接
* [https://github.com/lvzhenbang/webpack4.x-multi-page/tree/master/pages](https://github.com/lvzhenbang/webpack4.x-multi-page/tree/master/pages)
* [https://github.com/cnu4/Webpack-Vue-MultiplePage](https://github.com/cnu4/Webpack-Vue-MultiplePage)
* [https://github.com/charleylla/charley-vue-multi](https://github.com/charleylla/charley-vue-multi)

# 目录划分
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


# 搭建步骤
1. 配置webpack的**entry**, **output**, **alias**, **htmlPlugins** **loaders**

# todo
1. webpack 配置优化
2. webpack 配置合并
3. 引入第三方库
4. 封装axios
5. 多页面状态管理
6. 路由配置
7. 搭建dev-server
8. ...