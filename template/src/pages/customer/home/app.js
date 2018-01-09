import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'
{{#router}}
import router from './router'
{{/router}}
{{#axios}}
import axios from 'axios'
{{/axios}}
{{#mock}}
import './mock'
{{/mock}}


Vue.use(ElementUI)
{{#axios}}
Vue.prototype.$axios = axios
{{/axios}}

new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  render: h => h(App)
})
