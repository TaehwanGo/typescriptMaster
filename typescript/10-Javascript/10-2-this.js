console.log(this);

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
caller(); // increase는 window에 등록되어있지 않으므로 this는 undefined가 됨

class Bob {}

const bob = new Bob();
bob.run = counter.increase; // increase : this를 console에 찍음
// bob.run = counter.increase.bind(counter); // 기존 Counter object와 바인딩
bob.run(); //this는 라는 정보를 함수를 다루는 곳으로 할당하는 순간
// 읽어버릴 수 있기 때문에
// this를 꽁꽁 묶어 bind를 사용할 수 있음
