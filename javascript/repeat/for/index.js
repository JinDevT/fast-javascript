// numbers의 배열에서 3 보다 큰 숫자만 새로운 배열에 담아서 리턴하기.

function biggerThanThree(numbers) {
    let array = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 3) {
            array.push(numbers[i]);
        }
    }
    return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));