/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

let firstValue = Number(prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 10));
let secondValue = +prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

console.log(firstValue + secondValue);
// console.log(typeof secondValue);

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상
let a = "10";
let b = "30";

// 단항 연산자 -> 피연산자 갯수가 1개
let unary = +a;

// 이항 연산자 -> 피연산자 갯수가 2개
let binary = a + b;

// 삼항 연산자 -> 피연산자 갯수가 3개
//Math는 정말 많은 기능을 가지고 있는 수학 객체.
//big이 true, small 이 false
let ternary = Math.random() > 0.5 ? "big" : "small";

if (Math.random() > 0.5) {
  ternary = "big";
} else {
  ternary = "small";
}

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 3;

// 산술 연산자: 곱셈
let multiplication = a * b;

// 산술 연산자: 나눗셈
let division = 6 / 3;

// 산술 연산자: 나머지
let remainder = 10 % 3;

// 산술 연산자: 거듭 제곱
let power = 2 * 53;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = "9" * "3";

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];

//// 근데 요새는 concat은(배열, 문자열 등 합치기) 잘 안씀.
//// let newArray = [1, 2, 3].concat([4, 5, 6]);
//// console.log(newArray);

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

////전개 연산자 spread Operator (리액트에서 엄청 많이 쓰임. )
////배열 복사, 객체 복사할 때도 많이 쓰임.
let newArray = [...firstArray, ...secondArray];
console.log(newArray);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

let number = 100;

// 선,후 증감 연산자
// ++, --
console.log(number);
console.log(number++);
console.log(number);

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?

console.log(total);
