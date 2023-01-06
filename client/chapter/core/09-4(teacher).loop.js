/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  // hasOwnProperty: function (){
  //   return '헤헤'
  // }
};

let key = "standardName";

// console.log( key in javaScript );

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(javaScript.hasOwnProperty(key));
//밑의것은 찐 객체에 닉네임 타이거를 찐으로 넣어버리게 됨... 이러면 전역이 오염된다.
// Object.prototype.nickName = 'tiger'

// 객체 자신의(own) 속성(property)인지 확인(has)하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

let a = {};

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

const user = {
  name: "tiger",
  age: 32,
};

function hello() {
  //여기의 this는 그냥 임의로 지은거
  console.log(this);
}

hello();
//함수가 가진 능력이다 보니, call이 실행시켜줄 수 있다.
//call의 능력은 this 에게 내가 원하는 것을 던져줄 수 있다.
hello.call("a");

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

//배열에 for in을 쓰지 않기를 MDN은 권한다. 성능적인 문제도 있고 기술적 문제도 있어서. for in은 객체에 양보하기
let tens = [10, 100, 1000, 10000];

for (let value in tens) {
  if ({}.hasOwnProperty.call(tens, value)) {
    console.log(value);
  }
}
