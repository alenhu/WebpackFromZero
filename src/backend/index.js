import "@babel/polyfill";
import { resolve } from "url";
import { rejects } from "assert";

/* eslint-disable no-console */
// import _ from "lodash";
import c from "./c";
// // const a = require("./a");
// // a.introduce();
// // console.log(_.keys(a));
// // const b = require("./b");
// // b();
c();
// eslint-disable-next-line no-console
function ptest(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log("'I start'");
      resolve("'I start'");
    },2000);
  });
}
async function test(){
  await ptest();
  console.log("after ptest");
}
// eslint-disable-next-line no-console
console.log("i am backend,  head from me!ddd");
// eslint-disable-next-line no-console
console.log("ddddddddddddddddddsssssss", "ddddddddddddssss");
const say = ()=>{
  // eslint-disable-next-line no-console
  console.log("to say");
};
say();
for (let i = 0; i < 10; i++) {
  console.log(i);
}
test();

console.log([1,2,3].findIndex(x => x == 4));

console.log("abc".padStart(10)); 

const alertMe = (msg) => {
  console.log(msg);
};
class Robot {
  constructor (msg) {
    this.message = msg;
  }
  say () {
    alertMe(this.message);
  }
}
const marvin = new Robot("hello babel");
marvin.say();
