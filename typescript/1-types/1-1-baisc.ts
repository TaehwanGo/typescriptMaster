{
  // 2-3.
  // let es6
  let name = 'tony';
  name = 'taehwan';

  const age = 30;
  // age = 32;
}
{
  /**
   * 2-4.
   * Javascript type 분류 두 가지
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array, ...
   */

  // number
  const num: number = 'd'; // type string is not assignable

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined : 값이 있는지 없는지 결정되지 않은 상태
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null : 텅텅 비었다고 명시해주는 것
  let person: null; // 💩
  let person2: string | null;

  // 어떤 것 또는 undefined을 더 많이 이용함
  function fine(): number | undefined {
    // 숫자를 return 하거나 undefined을 return
    return undefined;
  }
}
{
  // 2-5.
  // unknown 💩 : 가능하면 안쓰는 것이 좋지만 typescript와 javascript를 연동한 경우
  // javascript에서 return하는 타입을 모를 수 있음
  let notSure: unknown; // 어떤 종류의 데이터가 알 수가 없음
  notSure = 'he';
  notSure = true;
  notSure = { wtf: 'a' };

  // any 💩 : 가능한 안쓰는 것이 좋음
  let anything: any = 0;
  anything = 'hello';

  // void : 아무 것도 return하지 않음
  function print(): void {
    console.log('hello');
    return;
  }

  let unusable: void = undefined; // 💩

  // never : return 하지 않음
  function throwError(message: string): never {
    // message -> server (log) // case 1
    throw new Error(message); // case 2 : error 발생으로 앱이 멈추는 것은 return되는 것이 아님
    // while(true){} // case 3
  }

  let neverEnding: never; // 💩

  // object
  let obj: object; // 어느 object든 가능, 배열도 가능 // 💩
  function acceptSomeObject(obj: object) {}
}
