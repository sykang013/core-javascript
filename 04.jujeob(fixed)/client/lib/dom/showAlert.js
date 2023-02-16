import { getNode } from "./getNode.js";
import { addClass, removeClass } from "./css";

function showAlert(node, text = "에러입니다", timeout = 1500) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = text;

  addClass(node, "is-active");
  //일정 시간이 지난 후 없어져야 하는것이 셋타임아윳(셋타임아웃)

  setTimeout(() => {
    removeClass(node, "is-active");
  }, timeout);
}

//쇼 얼럿에서 넣은 것은 노트로 들어가고, 노드가 스트링이라면, 실제 노드를 내보내고,
//우리가 입력받은 텍스트의 전달값음 넣어주세요.
//클래스 추가, 노드에세 is-active란 클래스를

showAlert(".alert", "올바른 정보를 입력해주세요", 3000);
