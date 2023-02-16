/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */
////핸들러라고 하는데 걍 콜백함수라고 생각하면 된다.
const first = getNode(".first");
const second = getNode(".second");
const ground = getNode(".ground");
const ball = getNode(".ball");

function handler() {
  console.log("hit !");
}

first.addEventListener("click", handler);

ground.addEventListener("click", function (e) {
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX}px,${e.offsetY}px)`;
});

/* -------------------------------------------------------------------------- */
/*                                     이얍                                     */
/* -------------------------------------------------------------------------- */
// first.addEventListener("click", handler);

// function bindEvent(node, type, handler) {
//   if (typeof node === "string") node = getNode(node);
//   //유효한 이벤트 타입인지를 체크해주는 줄. 저유 표현식. 플래그(?)**
//   //test 자체는 값이 있으면 t 없으면 f를 반환해주는 유틸
//   if (!/mouseenter|click|mousemove|mouseleave/g.test(type)) {
//     typeError(
//       "bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다."
//     );
//   }

//   node.addEventListener(type, handler);

//   return () => node.removeEventListener(type, handler);
// }

// const off = bindEvent(".first", "click", handler);
// bindEvent(".first", "click", handler);

// - addEventListener
// - removeEventListener
