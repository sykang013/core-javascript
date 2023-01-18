import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode(".first");
const second = getNode(".second");

// console.log(first);

/*txt가 100px만큼 위로 이동한 후, 회전하는 애니메이션을 만들고자 했다
하지만 밑처럼 하면 두 동작이 동시에 실행이 된다. 
왜냐면 이 코드 끝난 후에 이거 실행해. 라고 한 적이 없기 때문에
이 문제를 해결하기 위해 => 콜백이 필요해진 시점이다.
first.style.top = "-100px";
first.style.transform = "rotate(360deg)";*/

//setTimeout 유틸함수 만들기
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}
/* 
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    second.style.left = '100px';
    delay(()=>{
      first.style.top = '0px';
      second.style.left = '0px';
    })
    first.style.transform = 'rotate(360deg)';
  })
})
 */

/* 
delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  second.style.left = '100px';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
  second.style.left = '0px';
})
 */

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

export function delayP(options = {}) {
  //defaultOptions
  let config = { ...defaultOptions }; //얕은 복사

  if (isNumber(options)) {
    config.timeout = options;
  }

  //객체 합성 mixin 이건 매우 많이 쓰므로 알아두어야한다.
  if (isObject(options)) {
    ////() 안 순서가 중요하다. options 처럼 뒤에 있는 애가 덮어씌워지는것
    config = { ...config, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}
//중요한것은 delayP() 했을 때 반환되는 값은 프라미스(객체) 라는 것이다.

/*delayP({
  data: "안녕",
}).then((res) => {
  console.log(res); // 진짜 성공
});
*/

/*//프라미스는 값을 내뱉기 때문에 계속 이어서 쓸 수 있다. (프라미스 체이닝)
delayP()
.then(res=> console.log(res));
.catch(err=> console.log(err));*/

/* ------------------------------ async, await ------------------------------ */
//async: 일반함수를 promise를 반환하는 함수로 만든다.
//await : 1. promise가 반환하는 result를 가져오기
//        2. 코드 실행 흐름 제어
//           -.파싱 순서를 제어하여 원치 않는 에러가 발생하는 것을 막아줄 수 있다.

//일반함수 앞에 async를 붙이면 promise를 반환한다.
async function delayA() {
  return "완료"; //promise 안의 [[promiseResult]]에는 "완료" 가 담긴다.
}

let result = await delayA(); //await은 promise가 반환하는 result값 가져옴. await은 promise 앞에 쓸 수 있다.

/*
//async 없이는 아래와 같이 promise를 생성하고 .then을 쓰는 등 여러 공정을 거쳐야 한다.
function delayA(){
  return new Promise(resolve, reject) => {
    resolve('완료');
  }
}

let result = delayA().then()
console.log(result);
*/

/* ------------------------------ try catch 예제 ------------------------------ */

async function 라면끓이기() {
  try {
    await delayP();
    first.style.top = "-100px";

    await delayP();
    first.style.transform = "rotate(360deg)";

    await delayP();
    first.style.top = "0px";

    await delayP();
    console.log("계란넣기");

    // throw new Error('계란 껍질이 들어가버렸다!');
    await delayP();
    console.log("그릇에담기");
  } catch (err) {
    console.log(err);
  }
}

// 라면끓이기()
