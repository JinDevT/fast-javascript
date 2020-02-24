// 배열 내장함수 (.reduce)
// 주로 배열이 주어졌을 떄, 배열안의 모든값을 사용하여 연산할 때 사용한다.
// 첫번 째 파라미터는 누적된 값을 계산하는 함수를 넣어줌(두가지의 파라미터를 받아옴.)
// 두번 째 파라미터는 accumulator 의 기본 값을 설정.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum); 15


// 각 알파벳이 몇개 있는지 알아내는 문제.

const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc,cuurent) => {
    if(acc[cuurent]) {
        acc[cuurent] += 1;
    }else {
        acc[cuurent] = 1;
    }
    return acc;
}, {})

console.log(counts); // {a:3, b:1, c:2, d:1, e:1}