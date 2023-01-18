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

function delayP(options = {}) {
  //defaultOptions
  let config = { ...defaultOptions }; //얕은 복사
  //객체 합성 mixin 이건 매우 많이 쓰므로 알아두어야한다.
  ////() 안 순서가 중요하다. doptions 처럼 뒤에 있는 애가 덮어씌워지는것
  config = { ...config, ...options };

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
}

delayP({
  data: "안녕",
}).then((res) => {
  console.log(res); // 진짜 성공
});

/*//프라미스는 값을 내뱉기 때문에 계속 이어서 쓸 수 있다. (프라미스 체이닝)
delayP()
.then(res=> console.log(res));
.catch(err=> console.log(err));*/
