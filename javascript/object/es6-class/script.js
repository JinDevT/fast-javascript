//class
// es6에서부터 추가됨. 객체 생성자로 구현했던 코드를 더 명확하고, 깔끔하게 구현 할 수있게 해준다.
// 상속도 더 쉽게 해준다.

class Animal {
  constructor(type, name, sound) { // 생성자
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() { // 클래스 내부의 함수를 '메서드'라고 부른다. 이렇게 메서드를 만들면 자동으로 prototype 으로 등록됨.
    console.log(this.sound);
  }
}

class Dog extends Animal { // extends : 특정 클래스를 상속받는다.
  constructor(name, sound) { // 기존 contructor을 먼저 호출을 하고 자신의 일을 처리할 수 있음.
    super('개', name, sound); 
    // 자신이 상속받은 class의 constructor을 호출함.
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();