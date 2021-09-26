type Check<T> = T extends string ? boolean : number;

type Type = Check<string>; // 이해를 위한 예시 (실제로 이렇게 사용하진 않을 듯)

// Typescript 공식문서의 예시
type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';
// -> T가 string을 상속하면 'string'
// 아니라면 T가 number를 상속하면 'number'
// 아니라면 T가 boolean이라면 'boolean' , ...  // 중첩된 ternary operator(중첩된 삼항 연산자)

type T0 = TypeName<string>; // 'string'
type T1 = TypeName<'a'>; // 'string'
type T2 = TypeName<() => void>; // 'function'
