import { insertLast } from "./insert.js";

//유저 카드를 생성하는 함수(내용만 바꿔주면 같은 형식으로 만들어주는 템플릿 제작용)
//인수를 받자마자 구조분해 할당을 하면서 받지 못한 인수에 undefined가 뜨지 않도록 기본값 설정
const createUserCard = ({
  id = "",
  name = "",
  email = "",
  website = "",
} = {}) => {
  //매개변수 자리에 ={} 는 명시 목적. 빼도 똑같이 작동한다
  //객체의 구조분해 할당에서도 사실은 이름을 변경할 수 있다(ex.이름이 너무 길어서 편하게 줄여 쓰고 싶다던가)
  // const { id,name, email, website:site = '사이트'} = user //기본값을 설정해주지 않은 상태로 website 인수가 들어오지 않으면, undefined가 출력된다
  //밑에서 name이 에러가 나지 않는건 window 자체가 name을 가지고 있기 때문
  return /* html */ ` 
  <article class="user-card" data-index="user-${id}">
  <h3 class="user-name">${name}</h3>
  <div class="user-resouce-info">
    <div>
      <a class="user-email" href="mailto:${email}">${email}</a>
    </div>
    <div>
      <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
    </div>
  </div>
  <button class="delete">삭제</button>
</article>
`; //백틱 써야함
};

const createSpinner = (
  size = 100,
  loadingMessage = "유저 정보를 가져오는중.."
) => {
  return /* html */ `
  <figure class="loadingSpinner">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" preserveAspectRatio="xMidYMid">
      <g>
        <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1.0526315789473684s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1842105263157895s"></animateTransform>
        <circle cx="50" cy="50" r="39.891" stroke="#d4d4d4" stroke-width="14.4" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="15 300;96.49737985914986 300;15 300" keyTimes="0;0.5;1" dur="1.0526315789473684s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.08473684210526315s"></animate>
        </circle>
        <circle cx="50" cy="50" r="39.891" stroke="#ffffff" stroke-width="7.2" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="15 300;96.49737985914986 300;15 300" keyTimes="0;0.5;1" dur="1.0526315789473684s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.08473684210526315s"></animate>
        </circle>
        <circle cx="50" cy="50" r="32.771" stroke="#000000" stroke-width="1" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="15 300;79.27391229510917 300;15 300" keyTimes="0;0.5;1" dur="1.0526315789473684s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.08473684210526315s"></animate>
        </circle>
        <circle cx="50" cy="50" r="47.171" stroke="#000000" stroke-width="1" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="15 300;115.55930744407128 300;15 300" keyTimes="0;0.5;1" dur="1.0526315789473684s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.08473684210526315s"></animate>
        </circle>
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1.0526315789473684s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1"></animateTransform>
      
        <path fill="#d4d4d4" stroke="#000000" d="M97.2,50c0,6.1-1.2,12.2-3.5,17.8l-13.3-5.4c1.6-3.9,2.4-8.2,2.4-12.4"></path>
        <path fill="#ffffff" transform="translate(0,-0.1)" d="M93.6,50c0,1.2,0,2.4-0.1,3.6L93,57.2c-0.4,2-2.3,3.3-4.2,2.8l-0.2-0.1c-1.8-0.5-3.1-2.3-2.7-3.9l0.4-3 c0.1-1,0.1-2,0.1-3"></path>
        <path fill="#d4d4d4" stroke="#000000" d="M85.4,62.5c-0.2,0.7-0.5,1.4-0.8,2.1c-0.3,0.7-0.6,1.4-0.9,2c-0.6,1.1-2,1.4-3.2,0.8v0c-1.1-0.7-1.7-2-1.2-2.9 c0.3-0.6,0.5-1.2,0.8-1.8c0.2-0.6,0.6-1.2,0.7-1.8"></path>
        <path fill="#d4d4d4" stroke="#000000" d="M94.5,65.7c-0.3,0.9-0.7,1.7-1,2.6c-0.4,0.8-0.7,1.7-1.1,2.5c-0.7,1.4-2.3,1.9-3.4,1.3l0,0 c-1.1-0.7-1.5-2.2-0.9-3.4c0.4-0.8,0.7-1.5,1-2.3c0.3-0.8,0.7-1.5,0.9-2.3"></path>
        <path fill="#d4d4d4" stroke="#000000" d="M85.6,67c0,0.8,0.1,1.6,0.3,2.4c0.6-0.5,1.1-1,1.4-1.7c0.2-0.7,0.2-1.5-0.1-2.2C86.5,64,85.6,66.3,85.6,67z"></path>
      
      </g>
      <g>
        <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1.0526315789473684s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1842105263157895s"></animateTransform>
      
        <path fill="#ffffff" stroke="#000000" d="M91,33.6l-10,4c-0.4-1.2-1.1-2.4-1.7-3.5c-0.2-0.5,0.3-1.1,0.9-1C83.6,32.9,87.4,32.9,91,33.6z"></path>
        <path fill="#ffffff" stroke="#000000" d="M83.2,36.7l10-4c-0.6-1.7-1.5-3.3-2.3-4.9c-0.3-0.7-1.2-0.6-1.4,0.1C87.6,31.1,85.7,34,83.2,36.7z"></path>
        <path fill="#d4d4d4" stroke="#000000" transform="translate(0,0.2)" d="M82.8,50c0-3.4-0.5-6.8-1.5-10c-0.2-0.8-0.4-1.5-0.3-2.3c0.1-0.8,0.4-1.6,0.7-2.4c0.7-1.5,1.9-3.1,3.7-4l0,0 c1.8-0.9,3.7-1,5.6-0.3c0.9,0.4,1.7,1,2.4,1.8c0.7,0.8,1.3,1.7,1.7,2.8c1.5,4.6,2.2,9.5,2.2,14.4"></path>
        <path fill="#ffffff" transform="translate(0,0.3)" d="M86.4,50l0-0.9l-0.1-0.9l-0.1-1.9c0-0.9,0.2-1.7,0.7-2.3c0.5-0.7,1.3-1.2,2.3-1.4l0.3,0c0.9-0.2,1.9,0,2.6,0.6 c0.7,0.5,1.3,1.4,1.4,2.4l0.2,2.2l0.1,1.1l0,1.1"></path>
        <path fill="#000000" d="M88.6,36.6c0.1,0.3-0.2,0.7-0.6,0.8c-0.5,0.2-0.9,0-1.1-0.3c-0.1-0.3,0.2-0.7,0.6-0.8C88,36.1,88.5,36.2,88.6,36.6z"></path>
        <path fill="none" stroke="#000000" d="M86,38.7c0.2,0.6,0.8,0.9,1.4,0.7c0.6-0.2,0.9-0.9,0.6-2.1c0.3,1.2,1,1.7,1.6,1.5c0.6-0.2,0.9-0.8,0.8-1.4"></path>
        <path fill="#d4d4d4" stroke="#000000" d="M86.8,42.2l0.4,2.2c0.1,0.4,0.1,0.7,0.2,1.1l0.1,1.1c0.1,1.2-0.9,2.3-2.2,2.3h0c-1.3,0-2.5-0.8-2.5-1.9l-0.1-1 c0-0.3-0.1-0.6-0.2-1l-0.3-1.9"></path>
        <path fill="#d4d4d4" stroke="#000000" d="M96.2,40.2l0.5,2.7c0.1,0.5,0.2,0.9,0.2,1.4l0.1,1.4c0.1,1.5-0.9,2.8-2.2,2.8c-1.3,0-2.5-1.1-2.6-2.4l-0.1-1.2 c0-0.4-0.1-0.8-0.2-1.2l-0.4-2.5"></path>
        <path fill="none" stroke="#000000" d="M90.9,36.4c1.1-1.1,2.7-1.6,4.3-1.9"></path>
        <path fill="none" stroke="#000000" d="M91.6,37.5c1.3-0.5,2.8-0.8,4.2-0.7"></path>
        <path fill="none" stroke="#000000" d="M91.7,38.8c0.2-0.1,0.4-0.1,0.7-0.1c1.2-0.1,2.5,0,3.8,0.3"></path>
        <path fill="none" stroke="#000000" d="M85,38.4c-1.6-0.1-3.1,0.6-4.6,1.2"></path>
        <path fill="none" stroke="#000000" d="M85,39.5c-1.4,0.3-2.8,0.9-4,1.6"></path>
        <path fill="none" stroke="#000000" d="M85.5,40.4c-0.2,0-0.4,0.1-0.7,0.2c-1.1,0.5-2.2,1.1-3.2,1.8"></path>
        <path fill="#ff5091" d="M92.8,34.2c0.1,0.3-0.3,0.8-0.9,1c-0.6,0.2-1.2,0.1-1.4-0.2c-0.1-0.3,0.3-0.8,0.9-1 C92.1,33.8,92.7,33.9,92.8,34.2z"></path>
        <path fill="#ff5091" d="M82.2,38.2c0.1,0.3,0.7,0.3,1.3,0.1c0.6-0.2,1-0.6,0.9-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.5,37.5,82,37.9,82.2,38.2z"></path>
        <path fill="#000000" d="M90,35.7L89.3,36l-0.3-0.7c-0.3-0.9,0.1-1.9,0.9-2.3l0.7-0.3l0.3,0.7C91.3,34.4,90.9,35.4,90,35.7z"></path>
        <path fill="#000000" d="M85.3,37.4l0.7-0.2l-0.2-0.6c-0.3-0.8-1.3-1.2-2.1-0.8L82.9,36l0.2,0.6C83.5,37.4,84.4,37.7,85.3,37.4z"></path>
      
      </g>
    </svg>
    <figcaption>${loadingMessage}</figcaption>
  </figure>
  `;
};

// renderSpinner

export const renderUserCard = (target, data) => {
  insertLast(target, createUserCard(data));
};

export const renderSpinner = (target) => {
  insertLast(target, createSpinner());
};