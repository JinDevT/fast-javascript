// Good
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this === button); // true
  this.innerHTML = 'Clicked button';
});
