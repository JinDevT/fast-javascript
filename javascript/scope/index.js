const teamName = '리버풀';
const playerName = '반다이크';
let position = '수비수';

const playerInfo = () => {
  position = '골키퍼';
  return '선수 정보: ' + teamName + '의 ' + playerName + '는 '  + position + '입니다.';

};

const test = () => {
    return position;
}
console.log(playerInfo()); // 선수 정보: 리버풀의 반다이크는 골키퍼 입니다.
console.log(position); // 골키퍼

console.log('test함수의 position', test());
