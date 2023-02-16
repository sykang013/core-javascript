/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript2233 = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
};

let key = "valueOf";

// JS 라는 객체 안에 key 라는 값이 있어? => 응 있어
// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

//빌려쓰기 패턴/ 객체 자바스크립트가 진짜 능력을 빌려쓸 수 있는것.
//in 보다는 hasOwnProperty를 쓰는게 낫다. 지금은 for in을 배우고 있으니 for in 안에 hasOwnProperty 쓰는것.
//앞에 대문자가 붙은 애들은 생성자 = 진짜 능력을 같고 있는 애들의 능력을(prototype) hasOwnproperty가 쓸건데, 그러려면 빌려서(call) 와야한다.
console.log(Object.prototype.hasOwnProperty.call(javaScript2233, key));

for (let key in javaScript2233) {
  // 밑의 애는 부모에 있는 키값까지 가져옴.
  // console.log(key);
  //밑의 애는 자신만의 키값만.
  console.log(Object.prototype.hasOwnProperty.call(javaScript2233, key));
  //Object.prototype 가 너무 길면 {}로 대체할 수 있음.
  // console.log({}.hasOwnProperty.call(javaScript2233, key));
}

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
