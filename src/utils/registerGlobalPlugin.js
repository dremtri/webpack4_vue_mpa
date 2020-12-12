/**
 * @file 多页面引入公共包
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import { VuePlugin } from 'vuera' // 在vue项目中使用react组件

import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { locale, size: 'small' })
Vue.use(VuePlugin)

