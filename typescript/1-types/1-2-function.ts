{
  // Javascript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript
  function fetchNum(id: string): Promise<number> {
    // Promise 완료 후 number의 data를 return할 것을 알 수 있음
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100); // 100 이 숫자이기 때문에 <number>
    });
  }
}
