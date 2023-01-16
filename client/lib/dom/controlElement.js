import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";

//JS Doc은 밑에 오는 함수의 설명을 적어놓는 것이다.(TypeScript를 안 쓸 경우)
////타입을 강제할 수는 없지만, 유틸함수를 어떻게 써야하는지 기능을 명시해줄 수 있다.
////타입을 강제하는 것이 TypeScript.
////JSDoc을 잘 쓰면 문서로도 내보낼 수 있다.
/**
 * @function isElement checkElement
 * @param {HTMLElement} node
 * @return set disabled
 */

export function disableElement(node) {
  if (!isElement(node)) {
    typeError("disableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.");
  }
  node.disabled = true;
}

export function enableElement(node) {
  if (!isElement(node)) {
    typeError("enableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.");
  }

  node.disabled = false;
}

export function visibleElement(node) {
  // 보여야함
  if (!isElement(node)) {
    typeError("visibleElement 함수의 인자는 DOM 요소 노드 이어야 합니다.");
  }
  node.hidden = false;
}

export function invisibleElement(node) {
  // 안보여야함
  if (!isElement(node)) {
    typeError("invisibleElement 함수의 인자는 DOM 요소 노드 이어야 합니다.");
  }
  node.hidden = true;
}
