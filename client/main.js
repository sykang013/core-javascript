//모듈 프로그래밍 시작! 이제 HTML에 script로 넣는 방식이 아니라 JS에 모듈들 import 하는 방식

import {
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
} from "./lib/index.js";
import { jujeobData } from "./data/data.js";

//id는 쿼리셀렉터로 잡지 않아도 잡힌다. but 하면 안됨.<=이해 잘 못함
////야무쌤 온라인 강의 - 문서 객체에 접근하는 방법 첫번째 동영상 보면됨. (id로 잡히는 방법)
const submit = getNode("#submit");
//DOM 자체를 잡은것
const resultArea = getNode(".result");

function clickSubmitHandler(e) {
  //기본동작구문 차단
  e.preventDefault();

  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    console.log("이름을 입력해 주세요!");
    return;
  }

  if (isNumericString(name)) {
    console.log("제대로된 이름을 입력해주세요.");
  }
  //렌더링
  //쿼리 셀렉터는 덜 쓰면 덜 쓸수록 좋다.
  clearContents(resultArea);
  insertLast(resultArea, pick);
}

submit.addEventListener("click", clickSubmitHandler);

//syntaxError() 는 쓰면 프로그램 에러가 일어나서 프로그램 자체가 종료됨.
//또한 사용자에게 알려줘야하니 syntaxError 보다는 alert로 진행하는것이 좋다.
