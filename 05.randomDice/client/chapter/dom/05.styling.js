/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode(".first");

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log((first.className = "hello"));
//first.classList.add('hello')

function addClass(node, className) {
  ////validation
  ////node가 string이어야 getNode를 실행한다.
  if (typeof node === "string") {
    node = getNode(node);
  }
  ////validation 2
  ////node가 string이 아닌경우
  if (typeof className !== "string") {
    ////유틸함수 typeError를 이용한 에러 출력
    typeError("addClass 함수의 두 번쨰 인자는 문자 타입 이어야 합니다. ");
  }
  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (typeof className !== "string") {
    typeError("removeClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.");
  }
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === "string") node = getNode(node);
  if (typeof className !== "string") {
    typeError("toggleClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  }
  node.classList.toggle(className);
}

// addClass(".first", "hello");
//<span class="first hello">hello</span>
// removeClass(".first", "hello");
// //toggleClass('.first','hello')
// function toggleClass(node, text) {
//   document.body.classList.node.toggle(text);
// }
// toggleClass(".first", "hello");

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장
////노드에 스타일 객체가 가지고 있는 백그라운드 컬러로 변경
// first.style.backgroundColor = "red";
////아래와 같은 방법으로는 가저올 수 없다. 계산이 완료된 값만 가져올 수 있기 때문에.
////console.log(first.style.fontSize);

/* 계산된 스타일 읽기 ------------------------------------------------------- */
////CSS의 값을 긁어온다고 하면 무조건 컴퓨티드 해서 가져옴. 그냥 가져와진다해도 값이 불완전할 수 있기 때문에.
let size = getComputedStyle(first).fontSize;
console.log(size);
// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

////내가 해본 자습코드(
// function getCss(node, className) {
//   if (typeof node === "string") node = getNode(node);
//   if (typeof className !== "string") {
//     typeError("getCSS 함수의 두 번째 인자는 문자 타입이어야 합니다.");
//   }
//   node.classLIst.getComputedStyle(className).(className);
// }

/* -------------------------------------------------------------------------- */
/*                                   getCSS                                   */
/* -------------------------------------------------------------------------- */

// getCss(".first", "font-size");

// ////자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용하면 안된다.
// ////[ ] 각괄호 표기법을 해야한다.
// //대상에게 속성을 받아서 이 속성 값이 이거야, 퉤!! 하고 보여줘야되므로 return이 있다.
// function getCss(node, prop) {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }
//   ////도큐먼트 바디의 스타일에 prop이 없다면, 에러를 호출해라.
//   ////괄호가 없다면  !prop이 되어서 이상하게 결과나옴
//   if (!(prop in document.body.style)) {
//     syntaxError(
//       "getCss함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다."
//     );
//   }
//   //getComputedStyle(node)에서 나오는 값이 객체라는걸 잊으면 안된다!!
//   return getComputedStyle(node)[prop];
// }

// console.log(getCSS(".first", "font-size"));

/* -------------------------------------------------------------------------- */
/*                                   setCSS                                   */
/* -------------------------------------------------------------------------- */

// //대상에게 원하는 CSS 속성을 추가하는 동작만 할 필요가 있는거고,
// //값을 내보낼 필요가 없는 함수이므로 return 이 없어도 된다.
// //추가하는걸 node.style[prop] = value; 에서 해주고있기 때문에.
// function setCss(node, prop, value) {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }
//   if (!(prop in document.body.style)) {
//     syntaxError(
//       "setCss함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다."
//     );
//   }
//   //벨류가 없는 경우 에러 내보내기
//   if (!value) {
//     syntaxError("setCss 함수의 세 번째 인자는 필수값 입니다.");
//   }

//   node.style[prop] = value;
}

/* -------------------------------------------------------------------------- */
/*                     // //내개 짠 css 유틸함수 코드...쓸데없는 벨리데이션.                    */
/* -------------------------------------------------------------------------- */
// function CSS(node, prop, value) {
//   //validation
//   if (typeof node === "string") {
//     node = getNode(node);
//   }
//   if (!(prop in document.body.style)) {
//     syntaxError(
//       "setCss함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다."
//     );
//   }
//   if (value) {
//     setCss(node, prop, value);
//   }

//   if (!value) {
//     return getCss(node, prop);
//   }
// }

/* -------------------------------------------------------------------------- */
/*                              쌤이 짠 css 유틸함수 코드                              */
/* -------------------------------------------------------------------------- */
// const css = (node, prop, value) =>
//   !value ? getCss(node, prop) : setCss(node, prop, value);

// css(".first", "font-size", "100px"); //set
// css(".first", "font-size"); //get
