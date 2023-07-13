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
