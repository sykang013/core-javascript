//단순확인) html과 잘 연결되었는지 확인
//console.log("hit");

//ajax engine에는 xhr, fetch가 있으며 현재는 xhr을 다루는 법 중

/*
readyState
0 : uninitialized //초기화
1 : loading //로딩
2 : loaded // 로딩이 완료된
3 : interactive //인터렉티브
4 : complete //완료
*/

/* -------------------------------------------------------------------------- */
/*                                     실습                                     */
/* -------------------------------------------------------------------------- */

//phase3.패러미터 받는 즉시 구조분해 할당
////이렇게 하면 좋은 점 - 초기값을 설정할 수 있다.
export function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  //동일 출처 정책 'Access-Control-Allow-Origin':'*' | 참고 링크: https://yoo11052.tistory.com/139
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
} = {}) {
  //default parameter를 객체로 받기)
  //phase2. options의 구조분해 할당
  //// const { method, url, body } = options;
  const xhr = new XMLHttpRequest(); //내장 객체를 XMLHttpRequest를 생성자 함수로 불러옴
  // console.log(xhr);
  xhr.open(method, url); //비동기 통신 오픈

  {
    /*//phase4.객체를 배열로 변환시킨 후, 배열의 구조분해 할당
  ////Object.entries : 객체의 키와 밸류를 배열로 변환시킨다
  ////배열이므로 배열의 능력 forEach사용하여 키와 밸류로 이루어진 배열 생성 -> 배열의 구조분해 할당
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value); //헤더 추가하는 방법은 xhr의 setRequestHeader함수 사용
  });*/
  }

  //정보를 가져오기 위해서는 이벤트가 있어야 한다.
  ////readystatechange 가 변경이 일어났을 때마다 발생하는 이벤트이다.
  ////이벤트리스너 이름을 잘 살펴봐야함
  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr; //phase1.객체 구조분해 할당
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        //구조분해 할당 전 코드
        //// if (xhr.status >= 200 && xhr.status < 400) {
        ////   if (xhr.readyState === 4) {

        console.log("통신 성공");
        onSuccess(JSON.parse(response)); //JSON의 parse 함수로 문자를 객체화 시킨다.
      }
    } else {
      onFail("통신 실패");
    }
    //단순확인)
    // console.log(xhr.readyState);
    // console.log(xhr.status);
  });

  //서버에 요청 보내는것
  //데이터를 서버에 전달하기 위해서는 send 안에 넣어 전달해준다. 이떄 객체를 문자화 해주기 위해 JSON.stringify 사용
  xhr.send(JSON.stringify(body));
}

/* -------------------------------------------------------------------------- */
/*                                     get                                    */
/* -------------------------------------------------------------------------- */
//유틸함수 만들기
////함수도 객체가 되고 배열도 객체가 되는데, 그 안의 매서드를 재정의할 수 있다.
////아래는 매서드 안에서 함수를 호출한 것이므로 재귀라고는 볼 수 없다.
////get 하면 키값이 저장이 된 거고 거기의 밸류는 함수인것. 객체 안에 함수를 정의하는 것은 매서드.
////xhrData에 get 이라는 함수를 추가하고 있는 것.
xhrData.get = (url, onSuccess, onFail) => {
  //xhr함수를 하용하는데, 인자로 위에서 정의한 것들을 가져옴
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

/* -------------------------------------------------------------------------- */
/*                                    post                                    */
/* -------------------------------------------------------------------------- */
//xhrData 함수(객체) 안에 post라는 키값을 만들고, 그 안의 값은 (url, onSuccess,onFail을 패러미터로 받는) 함수
xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST", //xhrData 함수의 매개변수 기본값이 get이므로 xhrData.get에서는 인자에 없었던 것, xhrData.post는 인자로 post 지정해줘야하니까 뜬거
    //아래는 단축 표기법 (body:body, url:url => body, url)
    body,
    url,
    onSuccess,
    onFail,
  });
};

/* -------------------------------------------------------------------------- */
/*                                    put 자습                              */
/* -------------------------------------------------------------------------- */
xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    body, //업데이트할 내용 필요
    url,
    onSuccess,
    onFail,
  });
};

/* -------------------------------------------------------------------------- */
/*                                    delete 자습                                 */
/* -------------------------------------------------------------------------- */
xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    // body, // 지워야할 내용 필요하니까...라고 생각했는데 해당 아이디 값만 지우면 된다고 함.
    url,
    onSuccess,
    onFail,
  });
};

console.log("왜안돼!!");
// xhrData.post(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (res) => {
//     //result의 줄임말로 많이 씀.
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

/*
//함수에 인수를 통으로 전달
xhrData({
  url: "https://jsonplaceholder.typicode.com/users",
  onSuccess: (result) => {
    console.log(result); //onSuccess 함수이다. 익명함수가 아니라고 한다.
  },
  onFail: (err) => {
    console.error(err); //혼자 해봄. 실패시 실행함수 인자는 성공시 실행함수 인자와는 다른 값으로 명명하기
  },
});
*/

/*xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
});*/
