// 배열 내장함수(.concat)
// 배열을 합칠 때 사용하는 함수.
// 기존의 배열을 수정하지 않음.
// 대신 새로운 결과를 만듦.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(concated); //1,2,3,4,5,6