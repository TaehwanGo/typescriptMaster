interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// (나쁜 예)세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않음
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const tony = new FullTimeEmployee();
const bob = new PartTimeEmployee();
tony.workFullTime();
bob.workPartTime();

const tonyAfterPay = pay(tony);
const bobAfterPay = pay(bob);

// 6.5. 제네릭 조건 예제
const obj = {
  name: 'tony',
  age: 20,
};

const obj2 = {
  animal: '🦄',
};

// 직접 구현
// function getValue<T extends Object>(obj: T, key: string) {
//   return obj[key];
// }

// solution
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name')); // 'tony' // obj와 그 key를 전달하면 value를 return하는 함수
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🦄
