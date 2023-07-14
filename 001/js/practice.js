// // const: 상수 선언. let: 변수 선언.
// const a = 30;
// let b = 20;
// b = a;

// console.log(a);
// console.log(a + b);

// let date = new Date();
// let hour = date.getHours();

// // 조건문
// // if-else문
// if (hour < 11) {
//   alert("아침");
// } else if (hour < 15) {
//   alert("점심");
// } else {
//   alert("저녁");
// }

// // switch문
// let input = Number(prompt("숫자를 입력하세요.", "숫자"));
// switch (input % 2) {
//   case 0:
//     alert("짝수입니다.");
//     break;
//   case 1:
//     alert("홀수입니다.");
//     break;
//   default:
//     alert("숫자가 아닙니다.");
// }

// // 객체 내에 함수 선언 가능.
// const person = {
//   greet: function () {
//     return "hello";
//   },
// };
// console.log(person.greet());

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   mult: function (a, b) {
//     return a + b;
//   },
//   div: function (a, b) {
//     return a / b;
//   },
// };
// console.log(calculator.div(4, 2));

// // 반복문
// let array = ["포도", "딸기", "당근", "바나나", "망고"];

// // for문
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// // for-in문 -> 인덱스 반환
// for (let i in array) {
//   console.log(i);
//   console.log(array[i]);
// }

// // for-of문 -> 각 요소 반환
// for (let a of array) {
//   console.log(a);
// }

// // 1.
// // 오브젝트 내에 인자를 받는 함수를 만들어서 짝수인지 홀수인지 판별
// obj = {
//   isEven: function (i) {
//     if (i % 2 === 0) {
//       return "짝수";
//     } else {
//       return "홀수";
//     }
//   },
// };
// console.log(obj.isEven(3));

// // 2.
// // 배열 내 최대값 찾기
// // 배열(array)를 인지(argument)로 받는 함수를 만들어서
// // 그 배열의 최대값을 반환해보세요.
// function findMax(array) {
//   if (array.length == 0) {
//     return;
//   } else if (array.length == 1) {
//     return array[0];
//   }

//   max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// console.log(findMax([3, 6, 1, 8, 4, 5]));
// console.log(findMax([]));
// console.log(findMax([2]));

// // 함수를 이용한 구구단 만들기
// // 숫자 1개를 받아서 구구단 출력
// function gugudan(num) {
//   for (let i = 1; i < 10; i++) {
//     console.log(`${num}*${i}=${num * i}`);
//   }
// }
// gugudan(5);

// // 1부터 30까지 중 3의 배수면 'fizz', 5의 배수면 'buzz',
// // 3과 5의 배수면 'fizzbuzz' 나머진 그냥 출력
// for (let i = 1; i < 31; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// 나이가 20살 이상인 여성을 찾아서 출력
let data = [
  { 회원번호: 0, 아이디: "red", 성별: "남자", 나이: 21 },
  { 회원번호: 1, 아이디: "red", 성별: "남자", 나이: 17 },
  { 회원번호: 2, 아이디: "red", 성별: "여자", 나이: 16 },
  { 회원번호: 3, 아이디: "red", 성별: "여자", 나이: 55 },
];

for (i of data) {
  if (i.나이 >= 20 && i.성별 === "여자") {
    console.log(i);
  }
}
