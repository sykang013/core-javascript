/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

// indexOf를 사용해서 브라우저 알아내는걸 많이 함
// navigator의 userAgent 라는 애가 유저가 쓰는 컴퓨터의 정보를 다 가져다준다.?

let message = "Less is more.";

// length 프로퍼티
let stringTotalLength;

////유사배열이기 때문에 가능하다.
// for (let key of message) {
//   console.log(key);
// }

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log("extractCharacter : ", extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

////이건 가능
// message = 'more' + message[5];
////이건 안됨
// message[3] = 'i'

console.log(message);

// 부분 문자열 추출
////인자가 비어있으면 그냥 다 살려줌.
// let slice = message.slice();
////인덱스 정해주면 그 범위까지만 살려주는듯
let slice = message.slice(0, 3);
console.log("slice :", slice);

//앞에 음수가 와도 가능하다.
let subString = message.substring(0, 3);
console.log("subString : ", subString);
////얘는 안씀
// let subStr = message.sub;

// 문자열 포함 여부 확인
let indexOf = message.indexOf("p");
console.log("indexOf : ", indexOf);

let lastIndexOf = message.lastIndexOf("i");

let includes = message.includes("less");
console.log("includes :", includes);

////시작하는 글자 찾기
let startsWith = message.startsWith("L");
console.log("startsWith : ", startsWith);

////끝나는 글자 찾기
let endsWith = message.endsWith();
console.log("endsWith : ", endsWith);

// 공백 잘라내기 (근데 trimLeft trimRight는 삭선이 나오넹)
let trimLeft = message.trimLeft();
console.log("trimLeft : ", trimLeft);
let trimRight;
let trim = message.replace(/\s*/g, "");
console.log("trim : ", trim);

// 텍스트 반복
let repeat = message.repeat(3);
console.log("repeat : ", repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log("toLowerCase : ", toLowerCase);
let toUpperCase = message.toUpperCase();
console.log("toUpperCase : ", toUpperCase);

// 텍스트 이름 변환 유틸리티 함수

//파스칼케이스는 카멜 케이스를
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, "")
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

//규식이는 어디에쓰이지...
