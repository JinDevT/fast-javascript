//배열 내장함수 3(.findIndex, .find)
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

// .findIndex
// 배열안에 있는 애들이 객체이거나 특정조건에 대해 몇번 째 인지 알고싶을 때 사용.
// 파라미터에는 함수가 들어감
const index = todos.findIndex(todo => todo.id === 3);
console.log(index);

// .find
// 찾은 객체 그 자체의 값을 반환함.
const todo = todos.find(todo => todo.done === false);
console.log(todo);