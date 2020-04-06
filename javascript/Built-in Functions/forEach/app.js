// 배열 내장함수 1(.forEach)
// 배열안에 원소들을 가지고 작업을 일괄적으로 하고싶을 때 사용한다.
// 배열의 요소를 반복한다.
// 각 요소에 대해 콜백을 실행한다.
// 값을 반환하지 않는다.
// git test
const superheroes = [
    '아이언맨',
    '캡틴아메리카',
    '토르',
    '닥터 스트레인지'
]

//es5
superheroes.forEach(function(hero) {
    console.log(`es5의 문법 ${hero}`)
});

//es6
superheroes.forEach((hero) => {
    console.log(`es6의 문법 ${hero}`);
})