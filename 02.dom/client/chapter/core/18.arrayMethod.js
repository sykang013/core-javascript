/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

function isArray(data) {
  return (
    Object.prototype.toString
      .call(data)
      .slice(8 - 1)
      .toLowerCase() === ""
  );
}

/* 요소 순환 -------------------------------------------------------------- */

// 제이쿼리에도 each가 있는데 이건 index가 먼저와서 순서가 헷갈린 것이다.
// $.each((index,item))

// forEach

arr.forEach((item, index) => {});

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

// find
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = "";
// split
// join
