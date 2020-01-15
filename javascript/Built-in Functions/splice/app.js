// 배열 내장함수 (.splice)
// 배열에서 특정항목을 제거할 때 사용
// 제거 과정에서 해당 원소가 몇번 째 인지 명시해 줘야함.

const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30); // 30의 인덱스 값은 2
const spliced = numbers.splice(index, 1); // 인덱스 2에서 하나를 제거한다.
console.log(spliced); // [30]
console.log(numbers); // [10, 20, 30]

