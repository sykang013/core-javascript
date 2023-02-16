//esLint 언디파인드
/* eslint no-undef:'warn' */
//esLint 사용된적 없는 변수 밑줄 off
/* eslint no-unused-vars:'off' */

//첫번쨰 인풋: 퍼스트 넘버
// 주번쨰 인풋: 세컨드 넘버
// 던은 아이디가 던
// result 클래스 공간

// 기본 폼태그로 들어가있기 때문에 submit을 클릭하면 계속해서 새로고침이 일어나게 된다.
// 기본동작 차단 필요 preventDefault

// 1.인풋 벨류값 가져오기
// 2.이벤트 핸들러 연결하기
// 3.이벤트 기본동작 차단하기
// 4.두 수의 합을 더해주기
// 5.화면에 출력하기

import { getNode, css, addClass, removeClass } from "./lib/index.js";

// import { getNode } from "./lib/dom/getNode.js";
// import { attr } from "./lib/dom/getNode.js";
// import { css, addClass, removeClass, toggleClass } from "./lib/dom/css.js";

//1.인풋 벨류값 가져오기
//겟노드 자체가 쿼리셀렉터를 돌리는것
//유틸함수 geNode를 해당 ID를 갖고 있는
const firstInput = getNode("#firstNumber");
const secondInput = getNode("#secondNumber");
const done = getNode("#done");

function getInputValue(node) {
  if (typeof node === "string") node = getNode(node);
  //태그네임을 조회하면 대문자로 나오기 때문에
  if (node.tagName !== "INPUT")
    refError("getInputValue 함수는 INPUT ELEMENT만 허용합니다");
  //재사용성을 위해 일부러 굳이 넘버로 치환하지 않음
  return node.value;
}

//아래 arrow 펑션은 return이 생략되어 있음
// const sum = (valueA,valueB) => valueA + valueB;
function sum(valueA, valueB) {
  return valueA + valueB;
}

function clearContents(node) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = "";
}

function handler(e) {
  //자동실행 막기
  e.preventDefault();

  //함수를 하나 만들어서 거기에 인자를 전달했을떼 인풋이 가지고있는 벨류인지 확인해서 가져오는 기능을 console.error('만들자',만들자)
  //input으로 만든 것은 전부 string으로 받아진므로 +를 더해 숫자로 변환
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(".result");
  //유틸함수 inserLast 가져옴
  //str 들어왔을때 getNode 실행해라 + 결과값 도출되는 위치 선정
  insertLast(".result", total);
}

function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  console.log(firstValue);
}
done.addEventListener("click", handler);

firstInput.addEventListener("change", inputHandler);
secondInput.addEventListener("change", inputHandler);

//input에게 이벤트를 걸고 changeevent
