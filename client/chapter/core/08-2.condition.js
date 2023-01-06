/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
//// 비어있는 배열 자체도 값이 true.  thisIsFalsy: false } 는 그냥 객체고 이 안의 false는 그냥 텍스트.
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };

// 사이 범위 확인하기
// 중요도: 3
// age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.

// "이상과 이하"는 age(나이) 범위에 14나 90이 포함된다는 의미입니다.

// let age = 0;

// if (14 <= age && age <= 90) {
//   console.log("신청가능한 나이입니다");
// } else if (14 > age > 0 || age > 90) {
//   console.log("적정 나이가 아닙니다.");
// } else {
//   console.log("입력값을 다시 확인해주십시오");
// }

// let age = 20;
// if (age >= 14 && age <= 90) {
//   console.log("신청가능합니다");
// }

// if (whoAreYou === "Cancel") {
//   alert("canceled");
// } else if (whoAreYou !== "Admin" && whoAreYou !== "Cancel") {
//   alert("I don't know you");
// } else if (whoAreYou == "Admin") {
//   let passWord = prompt("Password?", "");
//   if (passWord == "Cancel") {
//     alert("canceled");
//   } else if (passWord !== "Cancel" && passWord !== "theMaster") {
//     alert("Wrong password");
//   } else if (passWord == "theMaster") {
//     alert("Welcome!");
//   }
// }

//// 과제: admin 을 어케하면 대소문자 상관없이 똑같이 받아들이게 할까?
//// 아스키 코드 사용 : 대소문자 아스키 코드가 달라서
////배열을 사용해서 하나하나 지정? => 이건 너무 복잡할듯
//// 어떤 문자를 받은 대문자 or 소문자로 변환하기. => 채택해서 성공.
let id = prompt("아이디를 입력해주세요");
let idLowerCase = id.toLowerCase();

if (id === null) {
  alert("취소되었습니다");
} else if (idLowerCase !== "admin" && id !== null) {
  alert("알 수 없는 사용자입니다.");
} else if (idLowerCase == "admin") {
  let pw = prompt("비밀번호를 입력해주세요");
  if (pw == null) {
    alert("취소되었습니다");
  } else if (pw !== "Cancel" && pw !== "theMaster") {
    alert("잘못된 비밀번호 입니다.");
  } else if (pw == "theMaster") {
    alert("환영합니다!");
  }
}

// 스터디 그룹 이현우님 코드 (low 하게 짜보셨다고 함)
// //마이투로월케이스 라는 함수를 선언한다
// function myToLowerCase(userName) {
//   //ret은 일단 공백이다
//   let ret = "";
//   //idx 안에는 -1이 담겨있다
//   let idx = -1;

//   //while 문.
//   while (++idx < userName.length) {
//     if (
//       "A".charCodeAt(0) <= userName.charCodeAt(idx) &&
//       userName.charCodeAt(idx) <= "Z".charCodeAt(0)
//     ) {
//       ret += String.fromCharCode(
//         userName.charCodeAt(idx) + ("a".charCodeAt(0) - "A".charCodeAt(0))
//       );
//     } else ret += userName[idx];
//   }
//   return ret;
// }

// let userName = prompt("아이디를 입력해주세요");
// let userNameLowerCase = myToLowerCase(userName);
// let pw = null;

// if (userNameLowerCase === "admin") {
//   pw = prompt("비밀번호를 입력해 주세요.", "");
//   if (pw === "TheMaster") {
//     console.log("환영합니다.");
//   } else {
//     console.log("취소했습니다.");
//   }
// } else if (userNameLowerCase === " " || userNameLowerCase === null) {
//   console.log("취소했습니다.");
// } else {
//   console.log("인증되지 않은 사용자 입니다.");
// }

//범쌤 코드
// let userName = prompt('사용자 아이디를 입력해주세요.','');

// // console.log(userName);
// if(userName?.toLowerCase() === 'admin'){

//   let pw = prompt('비밀번호를 입력해 주세요.','');

//   if(pw?.toLowerCase() === 'themaster'){
//     console.log('환영합니다.');
//   }else{
//     console.log('취소되었습니다.');
//   }
// }else if(userName.replace(/\s*/g,'') === '' || userName === null){
//   console.log('취소했습니다.');
// }else{
//   console.log('인증되지 않은 사용자 입니다.');
// }
