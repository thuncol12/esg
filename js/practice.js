// 1.
// 오브젝트 내에 인자를 받는 함수를 만들어서 짝수인지 홀수인지 판별
obj = {
  isEven: function (i) {
    if (i % 2 === 0) {
      return "짝수";
    } else {
      return "홀수";
    }
  },
};
console.log(obj.isEven(3));

// 2.
// 배열 내 최대값 찾기
// 배열(array)를 인지(argument)로 받는 함수를 만들어서
// 그 배열의 최대값을 반환해보세요.
function findMax(array) {
  if (array.length == 0) {
    return;
  } else if (array.length == 1) {
    return array[0];
  }

  max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(findMax([3, 6, 1, 8, 4, 5]));
console.log(findMax([]));
console.log(findMax([2]));

// 함수를 이용한 구구단 만들기
// 숫자 1개를 받아서 구구단 출력
function gugudan(num) {
  for (let i = 1; i < 10; i++) {
    console.log(`${num}*${i}=${num * i}`);
  }
}
gugudan(5);

// 1부터 30까지 중 3의 배수면 'fizz', 5의 배수면 'buzz',
// 3과 5의 배수면 'fizzbuzz' 나머진 그냥 출력
for (let i = 1; i < 31; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
