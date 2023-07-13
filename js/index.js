let title = document.getElementById("title");
console.log(title.innerText);
console.log(title.style);
title.style = "color: #bad0ff";

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
