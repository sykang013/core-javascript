/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */
/* 
const user = {
  sayHi(){

  },
  greeting: function(){

  }
}

button.addEventListener('click',(e)=>{
  
  e.target.style.background = 'red'
})
 */
/* 
let arr = [1,2,3,4];

function sum(...args){

  console.log(args);
}
 */

// sum(1,2,3,4,)
// rest parameter
const calculateTotal = (...args) => {
  let total = 0;

  args.forEach((item) => {
    total += item;
  });

  // args.reduce((acc,item)=> acc + item )
  // console.log();

  return total;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;

// 화살표 함수와 this

function normalFunction() {
  console.log("일반함수 : ", this);
}

const arrowFunction = () => {
  console.log("화살표함수 : ", this);
};

// normalFunction()
// arrowFunction()

//  객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
//  메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋아.

const user = {
  name: "tiger",
  age: 32,
  address: "서울시 중랑구 면목동",
  grades: [80, 90, 100],
  totalGrades: function () {
    /*  let total = 0;
    this.grades.forEach((item)=>{
      this
    })
    return total */

    function foo() {
      console.log("foo : ", this);
    }

    const bar = () => {
      console.log("bar : ", this);
    };

    foo.call(user); // user
    bar(); // user object
  },
};

console.log(user.totalGrades());

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;
};

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

// pow(2,53) // 9007199254740992

// repeat(text: string, repeatCount: number): string;
// let repeat = (text, repeatCount) => {
//   let result = '';
//   for(let i = 0; i < repeatCount; i++){
//     result += text;
//   }
//   return result;
// };

//리듀스 안에서 acc값과 곱하기 또는 더하기를 하는 것은 실제로는 acc *= numeric 되는것과 똑같다고 보면 된다.
//                                                acc += text
//null은 의미없이 빈 null 채우기임.(undefined를 넣어도 되긴하겠지만, 이건 정의되지 않은이니 좀 더 )
// let repeatExpression = (text, repeatCount)=> Array(repeatCount).fill(null).reduce((acc)=>{acc + text},'')
//아래처럼 괄호를 몇개 없앨 수 있다.
//acc + text 은 중괄호가 없으면 그대로 return 된다.
let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, "");

repeatExpression("hello😘", 3);

// repeat('hello😘',3) //  'hello😘hello😘hello😘'

//===
//01 과제1 죠랄했던거
//pow(2,53)승한 결과같이 담길 수 있도록. (거듭제곱 연산자로 쓰지말고 반복문으로 만들어보기)

// pow(numeric: number, powerCount: number): number;
// function pow(number,exponentiation){
//   for(let i = 1; i <= exponentiation; i++){
//     if(i == 1 ){
//       let sum = number * number
//     console.log( i + "번째 계산" + sum);
//   }else if( i <= exponentiation){
//     let sum2 = sum * number
//     console.log( i + "번째 계산" + sum);
//   }
//   }
// };
// pow(2,53);
