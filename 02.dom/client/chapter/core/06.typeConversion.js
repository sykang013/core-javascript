const user = {
  sum: function () {
    return this;
  },
};

user.sum();

/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */
//String()  /  'string' + ''
//number -> '2022'
const YEAR = 2022;
console.log(String(YEAR));

//undefined -> 'undefined'
//null -> 'null'

let days = null;
console.log(String(days));

// boolean -> true' or 'false'
let isKind = true;
//스트링 함수를 명시하지 않아도 빈문자열을 넣으면 형변환이 자동으로 된다.
console.log(isKind + "");

/* 데이터 → 숫자 ----------------------------------------------------------- */

//  Number()

// undefined -> NaN
console.log(Number(undefined));

// null -> 0
let money = null;
console.log(Number(money));

// boolean -> true : 1 / false : 0
let cutie = false;
// 곱하기 1 (cutie * 1)or 나누기 1(cutie / ) 하거나 변수 앞에 +기호를 (+cutie)붙히면 자동으로 숫자로 형변환됨.
console.log(cutie / 1);
console.log(+cutie);

// string 숫자형 문자
let num = " 123 ";
console.log(num * 1);

// numeric string
let width = "320px";
//뒤에 단위는 쏙 빼고 숫자만 걸러주는 함수. 뒤에는 진수를 작성(따로 기재 하지 않으면 10진수로 자동 인식되겠지만, 그래도 명시하는게 중요하다. )
console.log(parseFloat(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(123));
//느낌표는 부정연산자. 근데 느낌표를 두번 넣었으니 부정의 부정이므로 원래대로 나오는것.
console.log(!!2);
console.log(Boolean(!!null));
