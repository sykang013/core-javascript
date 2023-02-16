/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */

// 복사(copy) vs. 참조(reference)

let message = "문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.";
let messenger = {
  name: "kakao talk",
  manufacture: "kakao",
};

////텍스트에 message에 있는 값 할당
let text = message;
let conversationTool = messenger;

// text = "하이";
// conversationTool.name = "line";

// 비교 (복사 vs. 참조)
////참조에 의한 복사는 원시데이터에는 일어나지 않는다.
console.log(message == text);
console.log(message === text);
////참조에 의한 복사 (갚은 주소를 바라보고 있음)
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);

// 객체 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {};
////for in을 이용해서 키벨류를 다 전달해주었다.
for (const key in messenger) {
  cloneObject[key] = messenger[key];
}

// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({}, messenger);

// 3. 전개 연산자(...)(spread operator)를 사용한 복사
////정말 매우 간단하다
const spreadObject = { ...messenger };

// 4. 객체를 복사해주는 유틸 함수

const copydObject = (object) => Object.assign({}, object);

////내가 만든거 ㅠㅠ
// function copyOjt(object){
//   let result object = {...object}
// }
// const copycopy = copyOjt(messenger);

// 객체 병합(합성)
////컴바인하는거도 겁나 많이 한다.
const cssMapA = {
  color: "#4b004b",
  margin: "0 auto",
};

const cssMapB = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  padding: "0.4em 0.62em",
  color: "#3f9e97",
};

//이것도 되고
// let combinedCssMap = Object.assign({},cssMapA,cssMapB);
//이것도 된다.
let combinedCssMap = { ...cssMapA, ...cssMapB };

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  "min-height": "100vh",
  "max-width": {
    sm: "90%",
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copyedContainerStyles = { ...containerStyles };

// 1. 깊은 복사 유틸리티 함수 오후 3:34
function cloneDeep(object) {
  //fromEntries는 다시 객체로 바꾸는 것이다.
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === "object") {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js

for (var i = 2; i <= 9; i++) {
  for (var a = 1; a <= 9; a++) {
    console.log(i * a);
  }
}

2 * 1;

for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    document.write(i + "x" + j + "=" + i * j + "</br>");
  }
}
