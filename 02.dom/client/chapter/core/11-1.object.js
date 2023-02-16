/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
////css in js 방법론 (emotion / styled-component)
////우리가 걱정하지 않아도 된다는데 이유를 못들음
////단점도 확실히 있다. 단점은 퍼블리셔가 만질 수 없다 + 훨씬 느리다. JS가 한번 컴파일을 거쳐서 넣어주기 때문에 
// let cssCode /* HTML */ `
//   .dialog {
//     position: fixed;
//     z-index: 10000;
//     top: 50%;
//     left: 50%;
//     width: 60vw;
//     max-width: 800px;
//     height: 40vh;
//     min-height: 280px;
//     transform: translate(-50%, -50%);
//   }
// `;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
////세미콜론 없애고, 우항은 말풍선으로 감싸고, 
// let cssMap= {
//   position: "fixed"
//   zIndex: 10000
//   top: "50%"
//   left: "50%"
//   width: "60vw"
//   maxwidth: "800px"
//   height: "40vh"
//   min-height: "280px"
//   transform: "translate(-50%, -50%)"
// };




// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-1234',
  name: 'kindtiger',
  email: 'tiger@gmail.com',
  isSignIn: true,
  permission: 'paid' // free | paid 
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

////키값을 문자로 전달해야한다. 
// console.log(authUser["uid"])
// console.log(authUser["name"])
// console.log(authUser["email"])
// console.log(authUser["isSignIn"])
// console.log(authUser["permission"])


////값이 나오는지 안나오는지, 나오면 뭐가 나오는지, 에러가 나면 왜그런지 (강조)
// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel
////폰은 디폴트 패러미터
function createUser(computerProp = 'phone'){
//2객체를 리턴
  return {
name:'unknown',
email: 'unknown@company.io',
//캄퓨티드 프롭이라는 애가 
[computedProp]: '010-7169-0262'
  }
}

//3리턴된 객체가 유저에 저장.
const user = createUser()

// 프로퍼티 포함 여부 확인
for(let key in authUser){
  if(Object.prototype.hasOwnProperty.call(authUser, key)){
  // console.log(key);
  }
}

// 프로퍼티 나열

// let keyArray = Object.keys(authUser);
// let valueArray = Object.values(authUser);

////arrow function
const getPropertiesList = object => Object.keys(object);

//// for 문 버젼 (여기 안에 꼭 넣어야된다는거 있었는데 쌤 코드 참고 )
// function getPropertiesList(object){
//   let result = [];
//   for(let key in object){
//     result.push(key)
//   }
//   ////리턴이 꼭 있어야 한다. 
//   return result;
// }

let result = getPropertiesList(authUser)
  






// 프로퍼티 제거 or 삭제 (둘은 다르다)
////remove delete

// delete authUser['id']

////1.유틸함수을 만들 수 있을 것 같은데...?
////1.함수 이름 정하기
////2,인수(아규먼트)와 인자(패러미터)정하기
////3.확인하기(validation)
////4.리턴값(return)
////내가 만들어본 유틸함수
// function removeProperty = (objectName, wantDelete) => Object.delete(object.keys)

// let result2 = removeProperty(authUser, name);

////쌤 코드
function removeProperty(object, key){
 if(!(typeof object ==="object")){
  throw
 }
  Object[key] = null;
}



function removeProperty(object, key){
  delete object[key]
}

deleteProperty(authUser, 'uid')

/* -------------------------------------------------------------------------- */
/*                                      .                                     */
/* -------------------------------------------------------------------------- */
// 단축 프로퍼티(숏텐드 프로퍼티)
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// 단축전
// const student = {
//   name:name,
//   email:email,
//   authorization:authorization,
//   isLogin:isLogin
// }

// 단축과정1
// const student = {
//   name,
//   email,
//   authorization,
//   isLogin
// }
// 단축과정 2: 보통 한줄로 많이 쓴다. 
const student = {name,email,authorization,isLogin}

/* -------------------------------------------------------------------------- */
/*                                      .                                     */
/* -------------------------------------------------------------------------- */
// 프로퍼티 이름 제한 (쓰는것을 지양해야한다.)
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
////객체의 키를 배열로 바꾸고 그 배열의 갯수가 0 이면 ? true : false
function isEmptyObject(object) {
  // return Object.keys(object).length === 0 ? true : false
  return Object.keys(object).length === 0 ;
  
}

const empty ={}


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430 
}

//월급의 총 합을 console.error('구하세요',구하세요)
////오브젝트 키스는 키값만 배열로. 오브젝트 벨류스는 벨류만 배열로. 오브젝트 엔트리스는 둘다 배열로

// 근데 이건 옛날 방식이라..
// let total = 0 ;
// for(let keyValue of Object.entries(salaries)){
//   let key = keyValue[0];
//   let value = keyValue[1];

//   total += value;
// }

// console.log(total);

////배열 구조 분해 할당 destructuring assignments  다 깨부셔서 할당. 
let total = 0 ;
for(let [key,Value] of Object.entries(salaries)){
  total += value;
}

console.log(total);


//// 내가 한 그지코드
//// function sumSalaries(object) {
////   Object.entries(object)
  

// }

// console.log(sumSalaries(salaries))




////1.유틸함수을 만들 수 있을 것 같은데...?
////1.함수 이름 정하기
////2,인수(아규먼트)와 인자(패러미터)정하기
////3.확인하기(validation)
////4.리턴값(return)


////구조분해 할당은 진짜 많이 쓰인다. 
let color = ['#ff0000', '#2b00ff', '#00ff2f'];

const COLOR_RED = color[0];
const COLOR_BLUE = color[1];
const COLOR_GREEN = color[2];

const [ , , COLOR_GREEN] = color

console.log(COLOR_GREEN);


/* -------------------------------------------------------------------------- */
/*                                 객체 구조 분해 할당            ***                    */
/* -------------------------------------------------------------------------- */

////**********진짜진짜 중요하고 이거 모르면 다른거 못함. 오후 2:28분쯤 그 */
////위에 salaries가 정의가 되어 있기 때문에
////쇼탠드 프로퍼티/ 단축표기법
const {
  John
  Ann
  Pete
} = salaries;

//salaries.John으로 하지 않아도 되는. 그치만 이런 경우는 잘 없다
//객체가 가진 프로퍼티들을 다 빼내어서 쓸 수 있는것
console.log(a);