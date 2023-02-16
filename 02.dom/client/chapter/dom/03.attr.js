/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

let first = getNode(".first");
// - elementNode.hasAttribute(name) – 속성 존재 여부 확인. has는 가지고있는지 물어보는것. 환값 t or a
////first야 너 혹시 class란 속성을 가지고 있니?
console.log(first.hasAttribute("class"));

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log(first.getAttribute("class"));
////get은 has처럼 쓰는 방법
console.log(first.getAttribute("class") === "first");

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute("id", "box");
first.setAttribute("some", "hello");
// first.setAttribute('class','is-active');
////아래처럼 할수도 있지만 보통은 셋어트리뷰트 씀
//fist.id = 'box';

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute("some");
////공백으로 바꿔서 set을 이용한 삭제도 가능
first.setAttribute("some", "");

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
////열거가 가능하단것은 심볼에 이터레이터가 있다는 것이다.
///for of를 쓸 수 있냐 없냐로 이터러블한지 판단...
// console.log(first.attributes);
// for (let value of first.attributes) {
// }

//for of를 래처럼 할 수도 있겠지...근데 딱봐도 넘 힘들자너
// for (let i = 0; i < first.attributes.length; i++) {
//   console.log(first.attributes[i]);
// }

//  for of 를 쓸 수 있냐 없냐?

/* 
for(let i = 0; i < first.attributes.length; i++){
  console.log(first.attributes[i]);
}
for (let value of  first.attributes){
  // console.log(value);
}


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset
first.dataset.play = "playing"; // set

console.log(first.dataset.play); // get

//유틸함수
////get 만들기

console.log(attr(".first", "id", "container"));

console.assert(getAttr(".first", "class") === "first");

// function getAttr(node, prop) {
//   if (typeof node == "string") {
//     //우리가 만둘어뒀던 유틸함수 재사용.도큐먼트쿼리 어쩌구 할 수 있지만 우리가 만들든걸로 일단 시작.
//     node = getNode(node);
//   }
//   return node.getAttribute(prop);
// }

// //set 함수

// function setAttr(node, pro, value) {
//   ////이런 것을 validation(확인/검수)이라 한다
//   if (typeof node == "string") node = getNode(node);
//   //string이 아니면 에러메시지 던지기
//   if (typeof prop !== "string")
//     throw new TypeError(
//       "setAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다."
//     );
//   if (!value)
//     throw new SyntaxError("setArr 함수의 세 번째 인자는 필수값입니다.");

//   node.setAttribute(prop, value);
// }

// //first 노드 안에 data-value의 값으로 hello를 지정하겠다.
// getAttr(first, "data-play");
// setAttr(".first", "data-value", "hello");

// function attr(node, prop, value) {
//   if (!valur) {
//     return getAttr(node, prop);
//   } else {
//     setAttr(node, prop, value);
//   }
// }

let result = attr(".second", "id");
