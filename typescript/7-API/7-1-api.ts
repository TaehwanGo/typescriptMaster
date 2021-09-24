Array; // ctrl + click => lib.es5.d.ts를 선택 후 모든 method 읽어보기

// every를 이용해서 predicate라는 콜백함수(시험)을 통해 모두 true 인지 아닌지 결과를 boolean으로 return
type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];

// 모든 학생들이 true가 되어야만 every가 true가 됨
const result = students.every(student => {
  return student.passed;
});
console.log('students.every result', result);

// every의 overloading된 다른 예시
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
  // animal은 Cat이라고 가정하는데
  // Cat안에 isCat이 undefined이 아니면(정의되어 있으면) true
}

console.log(animals.every<Cat>(isCat));
