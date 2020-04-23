function getWesternAge(birthday) {
    let birth = new Date(birthday);
    let birthYear = birth.getFullYear(); // 생일년도
    
    let today = new Date(); // 오늘날짜
    let todayYear = today.getFullYear(); // 오늘년도
   
    let age = todayYear - birthYear ; // 오늘년도 - 생일년도 = 나이
    
    birth.setFullYear(todayYear); // 생년월일 객체의 연도를 오늘 날짜 객체의 연도로 변경
   
    if( today > birth) { // 같은 연도가 된 객체를 비교하여 월일이 지났는지 여부 판단
      age; // 생일이 안지났으면 나이
    } else {
      age--; // 
    }
    return age;
  }
getWesternAge('1981-07-29T03:24:00');
