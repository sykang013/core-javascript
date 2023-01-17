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

function xhrData(method, url, body) {
  //XMLHttpRequest 는 내장 객체이다.
  ////생성자 함수로 불러옴
  const xhr = new XMLHttpRequest();

  //비동기 통신 오픈
  xhr.open(method, url);

  //정보를 가져오기 위해서는 이벤트가 있어야 한다.
  ////readystatechange 가 변경이 일어났을 때마다 발생하는 이벤트이다.
  ////이벤트리스너 이름을 잘 살펴봐야함
  xhr.addEventListener("readystatechange", () => {
    //객체 구조분해 할당하여 간편하게 만듬
    const { status, readystate, response } = xhr; //객체 구조분해 할당
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        //구조분해 할당 전 코드
        //// if (xhr.status >= 200 && xhr.status < 400) {
        ////   if (xhr.readyState === 4) {
        console.log("통신 성공");
        //받은것 출력해보기.단 아직까지는 파싱 전 문자이다.
        // console.log(xhr.response);
        //JSON의 parse 함수로 문자를 객체화 시킨 것이다
        console.log(JSON.parse(xhr.response));
      }
    } else {
      console.log("통신 실패");
    }
    //단순확인)
    // console.log(xhr.readyState);
    // console.log(xhr.status);
  });

  //서버에 요청 보내는것
  //데이터를 서버에 전달하기 위해서는 send 안에 넣어 전달해준다. 이떄 객체를 문자화 해주기 위해 JSON.stringify 사용
  xhr.send(JSON.stringify(body));
}

xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
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
});
