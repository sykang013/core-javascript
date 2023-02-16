/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode(".visual");
const news = getNode(".news");
const desc = getNode(".desc");

visual.addEventListener("click", function (e) {
  // %c 는 나는 css를 쓰겠다. 이다.
  console.log("%c visual", "background:dodgerblue; color: white");
});

news.addEventListener("click", function () {
  // %c 는 나는 css를 쓰겠다. 이다.
  console.log("%c news", "background:orange; color: white");
});

getNode(".pop").addEventListener("click", () => {
  CSS(".pop", "display", "block");
});

////밑으로 전파되는거 멈춰!!!
// desc.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("%c desc", "background:hotpink; color: white");
// });

/* 캡처링 ----------------------------------------------------------------- */
