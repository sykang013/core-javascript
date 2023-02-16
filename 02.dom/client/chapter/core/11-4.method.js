/* ---------------------------------------------------------------------- */
/* Object Methods and This                                                */
/* ---------------------------------------------------------------------- */

//up, down, showStep을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.

let ladder = {
  //this의 프로퍼티는 step
  step: 0,
  up() {
    this.step++;
    //obj를 퉤 내뱉도록
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    //하) 단축구문으로 만들기 전
    // showStep: function () {
    // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log(this.step);
    return this;
  },
};

//아예 객체를 반환해버리면 가단하게 쓸 수 있지 않을지.

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
////화살표 함수의 this는 없으므로 this는 window가 도출됨
// const shopOrder = {
//   date: "2022. 7. 6",
//   tableIndex: 5,
//   menu: [
//     { name: "통 새우 돈까스", price: 13000, count: 2 },
//     { name: "치즈 돈까스", price: 10000, count: 1 },
//   ],
//   //메서드를 화살표 함수로 정의
//   totalPrice: () => {
//     //this가 누군지 찾기
// console.log(this);
//   }
// };

// shopOrder.totalPrice()

////컨시어스 이용하여
const shopOrder = {
  date: "2022. 7. 6",
  tableIndex: 5,
  menu: [
    { name: "통 새우 돈까스", price: 13000, count: 2 },
    { name: "치즈 돈까스", price: 10000, count: 1 },
  ],
  //이 밑을 화살표 함수로 하면 this를 찾지 않으니 실행이 안되었을것이다.
  totalPrice() {
    // console.log(this.menu[0].price * this.menu[0].count);
    // this.menu의 데이터타입이 배열이므로 배열 능력을 쓰면 아주 좋다.
    //menu 안의 price에 접근하고싶다. 근데 배열에는 쩜프로퍼티 자체를 못써. 쩜프로퍼티는 객체거야
    //그래서 메뉴의 0번째 객체에 인덱스로 접근해서 가져오는것
    //acc는 아이템의 제일 처음값을 담는다. 근데 우리가 원하는건 숫자값이니까, 그러기 위해 마지막에 초기값을 0으로 설정하는것.
    return this.menu.reduce((acc, cur) => {
      //객체가 갖고 있는 price와 객체가 갖고 있는 count가 곱해져서 acc와 더해지고 내보내지는것.
      //acc +   는  acc +=  로 읽으면 된다.
      return acc + cur.price * cur.count;
    }, 0);
  },
};

shopOrder.totalPrice(shopOrder.totalPrice());

//////메서드 안에서의 디스, 함수 안에서의 디스는 일반함수냐 화살표 함수냐에 따라 달라진다.

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: "글로벌 내비게이션",
  items: [
    { id: "link-g", text: "Google", link: "https://google.com" },
    { id: "link-n", text: "Naver", link: "https://naver.com" },
  ],
  getItem(index) {
    return this.items[index];
  },
  //이 메서드는 뭔가 추가해주는것 같다. .push는 배열 끝에 뭔가 추가해주는것.
  addItem(newItem) {
    //네비게이션 메뉴의 아이템에 ()값을 푸쉬를 하겠다.
    this.items.push(newItem);
  },
};

console.log(navigationMenu.getItem(0));

navigationMenu.addItem({
  id: "link",
  text: " Yahoo",
  link: "yoyo.kr",
});

////여기까지가 메서드와 객체와 this에 관한 내용이었다.
////머리에 다 들어오지 않을텐데 직접 콘솔에 찍어보고 해봐야된다.
