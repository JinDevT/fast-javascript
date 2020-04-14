function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  
  // prototype
  // 재사용하고 싶을 때 사용한다.
  // 우리가 객체생성자로 무언가 만들었을 떄 만든 객체들끼리 공유할 수 있는 어떠한 값이나 함수를 자바스크립트 객체생성자로 만든 함수에 대해
  // 프로토타입을 생성할 수 있다.
  Animal.prototype.say = function() {
    console.log(this.sound);
  }
  
  Animal.prototype.sharedValue = 1;
  
  const dog = new Animal('개', '멍멍이', '멍멍');
  const cat = new Animal('고양이', '야옹이', '야옹');
  
  dog.say();
  cat.say();