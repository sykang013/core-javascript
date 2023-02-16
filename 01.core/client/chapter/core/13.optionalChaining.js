/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */

const portableFan = {
  maker: "fromB",
  brand: "FD221",
  type: "neckband",
  photo: {
    static: "https://bit.ly/3OS50UD",
    animate: "https://bit.ly/3P8646q",
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);
////아래는 문재 보완
console.log(portableFan?.photos?.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

////언제 쓰는거지?
////그걸 알려면 셋타임아웃부터 알아야한다.(윈도우가 가지고 있는 매서드로, 앞의 window.는 생략가능.)
//콜백함수, 시간 두 가지를 받음(?) 잘 이해못함
//셋 타임아웃은 n초 뒤에 한번 실행하고 끝.
setTimeout(() => {
  console.log("하이하이하이하이");
}, 1000); // 초는 밀리세컨드

//셋인터벌은 n초 간격으로 실행
setInterval(() => {
  console.log("난 인터벌이야");
}, 1000);
