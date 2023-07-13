let title = document.getElementById("title");
console.log(title.innerText);
console.log(title.style);

title.innerHTML = "hello javascript";

function notifyResize(event) {
  console.log(event);
  console.log("resized");

  let width = window.innerWidth;
  let height = window.innerHeight;
  console.log(width, height);
}

// 2번째 인자 함수에 괄호 안붙임!!
window.addEventListener("resize", notifyResize);

const BASE_COLOR = "orange";
const OTHER_COLOR = "green";

function handleClick() {
  let currentColor = title.style.color;
  if (currentColor == BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

title.addEventListener("click", handleClick);

// 배열만들었따고해도 랜덤으로 0123 이라는값을 가져올수있어야됨
// 랜덤 정수 뽑는 함수 구글링
// 컬러가 4개 이상 들어가있는 배열을 만들고
// 특정 이벤트를 통해 랜덤으로 컬러가 선택되도록 마들어보세요.
const colors = ["#bad0ff", "#e35d6a", "#bcb3f8", "#339933"];
const backgroundColors = ["#fd8270", "#1974d2", "#f8d458", "#f7c0dc"];
function handleMouseEnter() {
  const i = Math.floor((Math.random() * 10) % 3);
  const j = Math.floor((Math.random() * 10) % 3);

  title.style.color = colors[i];
  title.style.backgroundColor = backgroundColors[j];
}
title.addEventListener("mouseenter", handleMouseEnter);
