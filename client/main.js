// gsap을 전역으로 사용하겠다.
/* global gsap */

import {
  swim,
  delayP,
  getNode as $, // as $ 하면 현재파일에서 getNode를 $ 로 바꿔쓸 수 있다.
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
} from "./lib/index.js";

// rendingUserList 함수 만들기
// ajax (tiger) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.

const userCardContainer = $(".user-card-inner");

async function rendingUserList() {
  renderSpinner(userCardContainer);

  try {
    await delayP(2000);

    $(".loadingSpinner").remove();

    let response = await swim.get("https://jsonplaceholder.typicode.com/user");

    let userData = response.data;
    // userData.forEach(data=> renderUserCard(userCardContainer,data))
    userData.forEach((data) => {
      renderUserCard(userCardContainer, data);
    });

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    console.log(err);
  }
}

rendingUserList();

//계속 생각을 해야한다. 우리가 뭘 넣었고 뭐가 나오고, 뭐로 받아야하는지

//배열순환에는 forEach 만큼 좋은것이 없다.
//reduce 와 map 은 값을 내뱉는게 필요해서 return을 써야했음.
