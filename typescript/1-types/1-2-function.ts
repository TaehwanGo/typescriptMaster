// {
//   // Javascript ๐ฉ
//   function jsAdd(num1, num2) {
//     return num1 + num2;
//   }

//   // Typescript โจ
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
//     // Promise ์๋ฃ ํ number์ data๋ฅผ returnํ  ๊ฒ์ ์ ์ ์์
//     // code ...
//     // code ...
//     return new Promise((resolve, reject) => {
//       resolve(100); // 100 ์ด ์ซ์์ด๊ธฐ ๋๋ฌธ์ <number>
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
  printName('Tony'); // ํ๋๋ง ๋ฃ์ผ๋ฉด ๋ถํ์ ํ์ง๋ง optional parameter๋ก ํด๊ฒฐ ๊ฐ๋ฅ

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter : ๊ฐ์์๋ ์๊ด์์ด ๋์ผํ ํ์์ ์ ๋ฌ ํ  ๋ ์ฌ์ฉ
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
