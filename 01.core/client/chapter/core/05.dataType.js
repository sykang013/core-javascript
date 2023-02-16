/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);
// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let nickName = "wow";
let message3 = `안녕 내 이름은 ${"안녕" / 3} 야`;
console.log(message1);
console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;
console.log("number : ", typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(12913n + 123n);
console.log(typeof 12913n);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
console.log(Symbol("uid"));

console.log(typeof Math);

const fuc = function () {};
console.log(typeof fuc);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// json
// JavaScript Object Notation

// Object
/* key value */
// 중괄호 열고 닫는걸 객체라고한다//
// const user = new Object()
const user = {
  name: "tiger",
  age: 27,
  fish: function () {
    return "뻐끔뻐끔";
  },
  alert: (aa) => {
    return aa;
  },
};

// Array
// let list = new Array()
//collection 배열은 컬렉션을 모아놓을 때.//
let list = [10, 100, 1000, 1, 2, 3];
console.log(list);
// list.length

// function 함수.
// 함수는 어떤 값을 받을 수 있다.
// return을 쓰지 않으면 결과값을 퉤 하고 내보내지 않음. 그냥 계산만 하고 있는.
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 30));

//함수는 큰 상자를 만드는 것인데, 결과값을 내보내고 싶다면 return을 주고, a와 b는 parameter(매개변수) 이다
//힘수를 호출할 때 받는 (위 예제의 1,3) 값은 argument(인자)이다.

function fishBreadCase(data) {
  return `${data} 맛 붕어빵 입니다.`;
}
fishBreadCase("팥");

//this
