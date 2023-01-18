/* ---------------------------------- fetch --------------------------------- */

const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const swim = async (options = {}) => {
  //객체합성
  const { url, ...restOptions } = {
    //합성을 통해 나온 결과에 url만 빼고 다 받는것
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  let response = await fetch(url, restOptions);

  if (response.ok) {
    //response.ok가 true면 통신성공
    response.data = await response.json(); //json파일로 가져오기 (response.jason 는 정해진 문법.) await으로 한번 까서 response.data로 넣음. parse는 알아서 해주는듯
  }

  return response;
};

/*  //fetch에서 내뱉어준 값 확인하기
  let response = await fetch(
    //실행 흐름을 통신완료까지 한번 막고, 프라미스의 result 뽑아냄
    "https://jsonplaceholder.typicode.com/users/1", //url
    {
      //객체 열기
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );*/

swim.get = async (url, options) => {
  return swim({
    url,
    ...options,
  });
};

swim.post = (url, body, options) => {
  return swim({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

swim.put = (url, body, options) => {
  return swim({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

swim.delete = (url, options) => {
  return swim({
    method: "DELETE",
    url,
    ...options,
  });
};

//console.log(await swim()); //보통 데이터값을 그대로 내보내지 않기 때문에, 값을 담아놓는다
