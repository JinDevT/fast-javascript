//배열 내장함수 3(.filter)
const todos =[
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    }
]
// .filter
// 특정 조건을 만족하는 원소를 찾아서 그 원소들을 가지고 새로운 배열을 만드는 함수.
// ex) 현재 있는 배열에서 done 값이 false 값을 필터링 하는식.
// 기존의 배열을 건들지 않고 새로운 배열을 만드는것!!
// 굉장히 유용한 함수다.
const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);