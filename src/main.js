import Vue from 'vue'
import App from './App.vue'
// import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';

// // 注册highlight插件
// Vue.use(hljs.vuePlugin);

import CodeView from './components/CodeView/index'

Vue.use(CodeView)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
