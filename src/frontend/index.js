/* eslint-disable no-console */
// import { keys } from 'lodash'
import Vue from 'vue'
import App from './main.vue'
// alert('i am index.js,on dev!!!')
// console.log([1, 2, 3].findIndex(x => x === 4))

// console.log('abc'.padStart(10))

// const alertMe = (msg) => {
//   console.log(msg)
// }
// class Robot {
//   constructor (msg) {
//     this.message = msg
//   }

//   say () {
//     alertMe(this.message)
//   }
// }
// const marvin = new Robot('hello babelssss')
// marvin.say()
// console.log(keys(marvin))
Vue.config.productionTip = false
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
// // eslint-disable-next-line no-new
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
