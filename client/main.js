import { xhrData, insertLast, xhrPromise, swim, delayP } from "./lib/index.js";

async function render() {
  await delayP(2000);
  let response = await swim.get("https://jsonplaceholder.typicode.com/users/1");

  console.log(response.data);
}

render();

/* 
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    insertLast('body',JSON.stringify(res))
  },
  (err)=>{
    insertLast('body','데이터 로딩에 실패했습니다.')
  }
)
 */
