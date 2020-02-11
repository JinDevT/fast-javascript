// 배열 내장함수 (.pop)
// 맨 뒤에 있는 원소를 추출하는 함수. shift 함수랑 반대되는 개념
// 기존의 배열을 수정함!!

// 배열 내장함수 (.push)
// 원소를 추가하는 함수. 
// 기존의 배열을 수정함!!


// pop
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value); //40
console.log(numbers); // [20, 30, 40]

// push
const numbers2 = [10, 20, 30, 40];
numbers2.push(50);
console.log(numbers2); // [10, 20, 30, 40, 50]