// 배열 내장함수 (.shift)
// 맨 앞에 있는 원소를 추출하는 함수.
// 기존의 배열을 수정함!!

// 배열 내장함수 (.unshift)
// 맨 앞에 원소를 추가하는 함수.
// 기존의 배열을 수정함!!

// shift
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value); //10
console.log(numbers); // [20, 30, 40]

// unshift

const numbers2 = [10, 20, 30, 40];
numbers2.unshift(0);
console.log(numbers2); // [0, 10, 20, 30, 40]
