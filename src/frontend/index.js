/* eslint-disable no-console */
import { pick, keys } from 'lodash'
alert('i am index.js,on dev!!!')
console.log([1, 2, 3].findIndex(x => x === 4))

console.log('abc'.padStart(10), pick)

const alertMe = (msg) => {
  console.log(msg)
}
class Robot {
  constructor (msg) {
    this.message = msg
  }

  say () {
    alertMe(this.message)
  }
}
const marvin = new Robot('hello babelssss')
marvin.say()
console.log(keys(marvin))
