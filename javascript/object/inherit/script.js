function Animal(type, name, sound) { // 객체생성자 함수를 new ㅋㅣ워들 사용해서 객체를 생성.
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
}

function Dog(name, sound) {
  // Animal 객체 생성사를 재사용할거다.
  console.log(this)
  Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype; // 어떠한 공유되는 값을 설정.
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();