// import "@babel/polyfill";
// import { resolve } from "url";
// import { rejects } from "assert";
import {resolve} from 'path';
import {readFileSync} from 'fs';
/* eslint-disable no-console */
import {pick,keys} from 'lodash';
// const _ = import(/* webpackChunkName: "my-chunk-name" */ "lodash");
import c from './c';
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
      console.log('\'I start\'');
      resolve('\'I start\'');
    },2000);
  });
}
async function test(){
  await ptest();
  console.log('after ptest');
}
// eslint-disable-next-line no-console
console.log('i am backend,  head from me!ddd');
// eslint-disable-next-line no-console
console.log('ddddddddddddddddddsssssss', 'ddddddddddddssss');
const say = ()=>{
  // eslint-disable-next-line no-console
  console.log('to say');
};
say();
for (let i = 0; i < 10; i++) {
  console.log(i);
}
test();

console.log([1,2,3].findIndex(x => x == 4));

console.log('abc'.padStart(10)); 

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
const marvin = new Robot('hello babel');
marvin.say();

const Koa = require('koa');
const cacheControl = require('koa-cache-control');
const staticCache = require('koa-static-cache');
const Router = require('koa-router');
const router = new Router();
const app = new Koa();

// response
console.log('abc',resolve('./'));
app.use(async (ctx,next)=>{
  console.log('got it in');
  await next();
  console.log('got it out');
});
app.use(staticCache(resolve('./'), {maxAge: 365 * 24 * 60 * 60}));
app.use(cacheControl({
  public: true,
  maxAge: 31536000
}));
router.get('/kkk', async ctx => {
  console.log( typeof(readFileSync(resolve('./package.json') )));
  // ctx.set({
  //   'Cache-Control': 'public,max-age=60',
  // });
  ctx.body = readFileSync(resolve('./package-lock.json'),{encoding:'utf8'});
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
