// {
//   // Javascript 💩
//   function jsAdd(num1, num2) {
//     return num1 + num2;
//   }

//   // Typescript ✨
//   function add(num1: number, num2: number): number {
//     return num1 + num2;
//   }

//   // Javascript
//   function jsFetchNum(id) {
//     // code ...
//     // code ...
//     return new Promise((resolve, reject) => {
//       resolve(100);
//     });
//   }

//   // Typescript
//   function fetchNum(id: string): Promise<number> {
//     // Promise 완료 후 number의 data를 return할 것을 알 수 있음
//     // code ...
//     // code ...
//     return new Promise((resolve, reject) => {
//       resolve(100); // 100 이 숫자이기 때문에 <number>
//     });
//   }
// }

{
  // 2.7
  // Javascript => Typescript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve', 'Jobs');
  printName('Tony'); // 하나만 넣으면 불평을 하지만 optional parameter로 해결 가능

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter : 개수에는 상관없이 동일한 타입을 전달 할 때 사용
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
