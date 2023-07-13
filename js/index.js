// const: 상수 선언. let: 변수 선언.
const a = 30;
let b = 20;
b = a;

console.log(a);
console.log(a + b);

let date = new Date();
let hour = date.getHours();

// if-else문
if (hour < 11) {
  alert("아침");
} else if (hour < 15) {
  alert("점심");
} else {
  alert("저녁");
}

// switch문
let input = Number(prompt("숫자를 입력하세요.", "숫자"));
switch (input % 2) {
  case 0:
    alert("짝수입니다.");
    break;
  case 1:
    alert("홀수입니다.");
    break;
  default:
    alert("숫자가 아닙니다.");
}

// 객체 내에 함수 선언 가능.
const person = {
  greet: function () {
    return "hello";
  },
};
console.log(person.greet());

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  mult: function (a, b) {
    return a + b;
  },
  div: function (a, b) {
    return a / b;
  },
};
console.log(calculator.div(4, 2));
