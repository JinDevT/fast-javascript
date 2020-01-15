// 배열 내장함수 (.slice)
// 배열에서 특정항목을 제거할 때 사용
// 기존의 배열을 건드리지 않음!! (splice랑 큰 차이점!)

const numbers = [10, 20, 30, 40];

const sliced = numbers.splice(0, 2); // 첫번 째 파라미터: start(어떤 인덱스부터 짜를지), 두번 째 파라미터: end(어디까지 제거할 지 나타냄)
console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40] 기존의 배열은 그대로!!

