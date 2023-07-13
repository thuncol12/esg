const a = 30;
let b = 20;
b = a;

console.log(a);
console.log(a + b);

let date = new Date();
let hour = date.getHours();

if (hour < 11) {
  alert("아침");
} else if (hour < 15) {
  alert("점심");
} else {
  alert("저녁");
}

let input = Number(prompt("숫자를 입력하세요.", "숫자"));
switch (input % 2) {
  case 0:
    alert("짝수입니다.");
    break;
  case 1:
    alert("홀수입니다.");
  default:
    alert("숫자가 아닙니다.");
}
