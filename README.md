### Typescript 를 공부해서 얻고자 하는 것

- 회사 프로젝트, 팀 프로젝트에서 타입스크립트 더 잘 사용하기

## 타입스크립트란?

### 1-1. 타입스크립트의 장점

- 코딩하면서 즉각적으로 타입에러를 받을 수 있음
- 자바스크립트에선 런타임할 때 에러를 확인 가능

### 1-2. 타입스크립트가 뜨는 이유

code -> compile time -> run time

dynamically typed : run time에서 타입이 결정됨

- javascript, python, ...

statically typed : compile time에서 타입이 결정 됨

- typescript, java, ...

dynamically typed 언어의 단점

- 가독성이 떨어짐
- 어플리케이션을 사용 중 에러가 터질 위험이 있음

typescript

- 안정적이고 확장이 쉬움
- 객체지향 프로그래밍이 가능

객체 지향 프로그래밍(OOP)의 장점

- modularity : 모듈성
- reusability : 재사용성
- extensible : 확장성
- maintainability : 유지보수성

### 1-3. 타입스크립트 공부하는 방법

1. JS의 기본지식이 필수
2. WEB API 와 같은 브라우저에 대한 지식이 필요
3. 타입 시스템을 이해하고 있어야 함

### 1-4. 필요한 준비물들 설치

- vscode extensions
- setting에서 "strict null" 검색
  - JS/TS > Implicit Project Config : Strict Null Checks에 체크
- 터미널 : mac은 iTerm2, 윈도우는 편한거(나는 git bash를 애용함)
- 타입스크립트2를 설치하기 위해서 nodejs가 필요함
  - npm이 필요함(node 설치 시 자동으로 설치 됨)
- global로 typescript를 설치함
  - npm install -g typescript
  - npm i -g ts-node
  - npm i -g @types/node

### 1-5. 꼭 북마크 해둬야 하는 사이트

- https://www.typescriptlang.org/
- 정독하고 컨셉만 이해 하자 : 강의에서 요즘메타에서 안 맞는 부분을 알려줌
- 타입스크립트는 업데이트가 빈번하게 이루어짐
  - 릴리즈 속도를 핸드북이 따라가고 있지 못 함
- What's New 섹션에서 새로운 버전에서 업데이트 된 점을 확인하면 좋음

### 1-6. 공식 사이트 읽어보기(타입스크립트 포인트 정리)

### 1-7. Typescript 공식사이트의 playground에서 실험해보기

## 기본타입 마스터 하기

### 2.1 타입이란? (타입의 원칙)

Programming?

- input : 입력된 값을 받아옴 - 키보드 입력, DB에서 받아옴
- operation : 입력된 값을 연산하고 처리
- output : 결과 값을 보여줌 - 화면, 프린터, 다른 기기나 DB에 전송하는 것 등

type : 타입이 정해지면 같은 타입만 허용

### 2.2 타입 공부를 위한 준비물

- 강의 자료를 복붙하기 보단 직접 타이핑 해볼 것

### 2.3 기본 타입 정리 1(자바스크립트 간단 복습)

모듈을 작성하지 않고 파일을 작성하면 모두 global scope로 책정이 됨

- 다른 파일에서 이름이 충돌 될 수 있음

let, const

### 2.4 기본 타입 정리 2(number, string, boolean, undefined, null)

### 2.5 기본 타입 정리 3(unknown, any, void, never, object)

### 2.6 함수에서 타입 이용하기 (JS 💩 -> TS ✨)

- 함수에서 좋은 활용 예를 알아보자
- 타입 정의 : 안정적인 프로그래밍 + 문서화

### 2.7 함수 타입 이용 (spread, default, optional)

- 최신 자바스크립트 문법 뿐만 아니라 타입스크립트에서만 제공하는 syntax(문법)도 사용가능
- terminal에서 실행
  - ts-node typescript/1-types/1-2-function.ts

### 2.8 배열과 튜플, 언제 튜플을 사용해야 할까?

#### Array

#### `number[]` vs `Array<number>`

```typescript
function printArray(fruits: readonly string[]) {
  // 주어진 데이터를 이용해서 무언가를 출력하거나 어떤 것을 할 수 있지만
  // 주어진 데이터를 변경하거나 업데이트 할 수 없음
  // readonly는 Array<number>에 사용할 수 없기 때문에 이럴 땐 number[]를 사용해야 함
}
```

#### Tuple -> interface, type alias, class

- 튜플 사용은 권장하지 않음
- 데이터 접근 할 때 배열 처럼 index로 접근하면 가독성이 떨어짐
- object나 class가 더 가독성이 좋음

### 2.9 타입스크립트의 꽃 Type Alias(앨리어스)

### 2.10 진정한 타입스크립트의 시작, Union 타입

### 2.11 필수 타입! Discriminated Union

- Discriminated : 차별화 하는, 구분할 수 있는

### 2.12 Intersection 타입

- Union은 발생하는 모든 경우 중 한 가지만 선택하는 것 : OR
- intersection은 그 모든 것을 다 합한 성격 : AND

### 2.13 Enum은 무엇이고 좋은 건가?

Enum : 여러가지에 관련된 상수 값들을 한 곳에 모아서 정의 할 수 있게 도와주는 타입

default로 0 부터 순차적으로 숫자가 입력되지만 원하는 숫자를 처음에 입력하면 그 숫자 다음으로 자동으로 넘버링 됨

문자열도 입력가능하지만 문자열은 수동적으로 하나씩 입력 해줘야 함

#### Typescript에서 enum은 가능한 사용하지 않는 것이 좋음

- enum으로 지정된 변수엔 다른 어떤 숫자도 지정 가능
- Union 타입이 더 좋음
- android같은 모바일 클라이언트에선 Union 타입을 사용 할 수 없기 때문에 enum을 사용하지만 웹에선 Union을 사용하는 것이 좋음

### 2.14 타입 추론(inference)은 무엇이고, 써도 되나?

- 타입을 추가하지 않아도 초기값에 의해 자동으로 타입이 결정되고
- 다른 타입을 입력시 에러가 발생함
- 함수의 초기값에도 적용됨

#### 타입추론 좋은 걸까?

- 실제 프로젝트의 함수는 간단하지 않기 때문에 타입을 작성하는 것이 좋다.

### 2.15 건방진 녀석 Type Assertion!

- 결론 부터 말하면 좋은 녀석은 아님

```typescript
// assertion 방법 세 가지
result as string
<string>result
!
```

## 3. 기본타입, 연습할 시간

### 3.3. 계산기 함수 만들기(first challenge)

- 다 똑같은데 throw new Error('error message') 만 다름

### 3.5 좌표 게임

- 나 잘못 한것 같은데 position 값이 왜 바뀐걸로 반영되는 거지?
- `--position.x` 때문에 position 값이 바뀐 것, `position.x + 1` 과 같이 작성하면 position값은 바뀌지 않음

### 3.7 로딩 상태 표시

- 엘리 답과 동일 함

## 4. 객체지향 프로그래밍

### 4.1 객체지향 소개

- 객체(오브젝트) : 관련된 데이터나 코드를 함께 묶을 수 있는 것

### 4.2 객체지향 개념 정리

#### Imperative and Procedural Programming

- 데이터와 함수들 위주로 구성 하는 것
- 단점 : 함수가 얽혀있고 데이터가 다른 곳에서 데이터를 수정할 수 있음

#### Object Oriented Programming

- 프로그램을 객체로 정의해서 객체들 끼리 서로 의사소통 하도록 디자인하고 코딩하는 것
- 서로 관련있는 데이터와 함수를 여러가지 오브젝트로 정의해서 프로그래밍 해나가는 것
- 여러번 반복되는 것이 있다면 관련 오브젝트를 재사용 할 수도 있음
- 새로운 기능이 필요하다면 새로운 오브젝트를 만들면 되니 확장성도 높음
- 생산성, 퀄리티 높여 줌

#### Object 구성

- 데이터
- 함수

#### 클래스 vs Object

- class
  - template
  - declare once
  - no data in
- object
  - instance of a class
  - created many times
  - data in

### 4.3 중요한 객체지향 원칙

1. Encapsulation : 캡슐화
2. Abstraction : 추상성
3. Inheritance : 상속 - 코드의 재사용을 높임
4. Polymorphism : 다형성

#### 4.3.1. Encapsulation

- 데이터와 함수를 관련있는 것 끼리 캡슐화

#### 4.3.2. Abstraction

- 내부의 복잡한 기능을 다 이해하지 않고 외부에서 간단한 interface를 통해 조작 가능

#### 4.3.3. Inheritance

- parent(super) - child(sub)
- 부모 클래스의 상속을 받아 조금 수정하거나 새로 만들어서 코드의 재사용성을 높임

#### 4.3.4. Polymorphism : 다형성

- pig, cat, dog는 animal class에 있는 makeSounds()라는 공통된 함수로 접근 가능

### 4.4 ~ 4.5 절차지향적으로 커피기계 만들기

### 4.6 ~ 4.7 객체 지향적으로 커피기계 만들기

### 4.8 ~ 4.9 Encapsulation 캡슐화 시켜보기

### 4.10 유용한 Getter와 Setter

- 일반 멤버 변수처럼 접근이 가능하지만 어떠한 계산을 해야될 때 유용함

`ts-node typescript/3-OOP/3-3-encapsulation.ts`

```typescript
class User {
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  // ...
}

// 접근 할 때 멤버변수 처럼 접근을 해야함
console.log(user.fullName);
```

```typescript
class User {
  private firstName: string;
  private lastName: string;
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class User {
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  constructor(private firstName: string, private lastName: string) {}
}

// 위 두 코드는 동일한 코드임
// 생성자 안에서 멤버변수를 선언과 동시에 지정 가능
```

### 4.11 Abstraction 추상화 몸소 느껴보기

class 안에 많은 method가 있는데 어떤 것을 먼저 실행해야 하는지 알기 쉽게 추상화(abstraction)

#### private으로 내부 method를 숨길 수 있음

#### interface : 계약서 같은 것

- type을 class로 하는 것이 아닌 interface로 해서 interface안에 있는 method만 자동완성이 되게 만드는 방법으로 추상화 가능

### 4.12 Interface 인터페이스, 모든것의 시작

- class로 타입을 설정하면 public함수 모두에 접근이 가능하지만
- interface로 타입을 설정하면 interface의 method로 접근을 제한 할 수 있음

### 4.13 ~ 14 (Inheritance)상속으로 다양한 커피 기계 만들기

- interface를 상속 받을 땐 implements
- 다른 class를 상속 받을 땐 extends
- 상속을 하기 위해선 생성자(constructor)가 public이거나 protected이어야 함

- 부모의 절차를 그대로 이용하고 싶다면 super.method();

```typescript
makeCoffee(shots: number): CoffeeCup {
  const coffee = super.makeCoffee(shots);
  this.steamMilk();
  return {
    ...coffee,
    hasMilk: true,
  };
}
```

### 4.15 Polymorphism 다형성

다형성의 장점 : 내부적으로 구현된 다양한 클래스들이 한가지 인터페이스를 구현하거나
또는 부모클래스를 상속했을 때 동일한 함수를 어떤 클래스를 구분하지 않고 공통된 API를 호출할 수 있음

### 4.16 상속의 문제점

#### 상속의 문제점 : 족보가 꼬인다.

- 중간에 것을 수정하면 상속 받는 모든 자식 클래스가 영향을 받음
- 두개 이상 클래스를 상속받을 수 없음

### 4.17 모든것을 뒤엎는 Composition ?

- Favor Composition over inheritance
  - 상속대신 컴포지션을 더 선호하라

#### Composition : 구성요소들, 구성

- 레고 처럼 조립해 나가는 것
- Dependency Injection

```typescript
class CheapMilkSteamer {
  private steamMilk(): void {
    console.log('Steaming some milk... 🥛');
  }
  makeMilk(cup: CoffeeCup): CoffeeCup {
    this.steamMilk();
    return {
      ...cup,
      hasMilk: true,
    };
  }
}

class CaffeLatteMachine extends CoffeeMachine {
  constructor(
    beans: number,
    public readonly serialNumber: string,
    private milkFrother: CheapMilkSteamer, // DI(Dependency Injection)
  ) {
    super(beans);
  }
  makeCoffee(shots: number): CoffeeCup {
    const coffee = super.makeCoffee(shots);
    return this.milkFrother.makeMilk(coffee);
  }
}
```

- 각각의 기능별로 클래스를 따로 만들어서 필요한 곳에서 가져다 사용
- 단점 : CheapMilkSteamer, AutomaticSugarMixer랑 굉장히 타이트하게 커플링이 되어 있음
  - class와 class 간에 서로 잘 알고 지내는 것은 좋지 않음

### 4.18 이번 챕터의 하이라이트 : 강력한 interface

- class 사이에 상호작용할 경우 클래스 자신을 노출하는 것이 아니라 인터페이스(계약서)에 의거해서 서로간 상호작용을 해야 함

  - decoupling의 원칙

- 그렇지만 타이트한 일정내 어떤 기능을 구현해야 된다면 오버엔지니어링 할 필요는 없다.
  - 확장하지 않아도 되는데 확장성만 너무 고려할 필요는 없다.

### 4.19 Abstract 클래스 사용 예시

- 상속을 이용할 때 절차적으로 진행되는 것이 있고
  어떤 특정한 기능만 자식 클래스에서 행동이 달라진다면
  abstract 클래스를 만들어 볼 수 있음

- 자식 클래스에서 super를 호출하지 않는 실수를 할 수도 있음

#### abstract class는 그 자체로 object(new)를 만들 수 없음

- 대신 자식 class에서 super를 사용하지 않아도 됨(overwrite하지 않기 때문)
- 대신 달라지는 부분은 아에 비워져 있기 때문에 만드는 것이 강제 됨

#### 자식마다 달라지는 method는 abstract를 붙여서 만들도록 강제하고

- 추상메소드는 구현사항을 작성할 수 없음

#### 그래도 가능하면 상속보단 composition을 이용하는 것이 확장성이 좋다.

- 깊은 수직관계를 피할 수 있음

## 5. 객체지향 프로그래밍 연습

### 5.1 ~ 5.3 스택 직접 만들어보기 & solution

- 단일 연결 리스트(singly-linked list)

## 6. 제네릭

### 6.1 제네릭 소개

- 5장에서 만든 Stack을 제네릭을 이용해서 원하는 타입의 Stack으로 사용할 수 있도록 할 수 있음

### 6.2. 함수를 제네릭 하게

```typescript
function checkNotNull<T>(arg: T | null): T {
  if (arg == null) {
    throw new Error('not valid number!');
  }
  return arg;
}
```

- 제네릭을 사용하는 함수에 제네릭 타입을 따로 설정하지 않아도 입력된 parameter에 따라서 typescript가 알아서 타입을 정해줌(설정된 제네릭에 맞게)
- 제네릭은 길게 쓰지 않고 대문자 하나만 사용
  - T : TYPE의 줄임말
  - I : ITEM
  - V : Value

### 6.3. 클래스를 제네릭 하게

```typescript
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}
```

### 6.4. 제네릭 조건

```typescript
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}
```

### 6.5. 제네릭 조건 예제

```typescript
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

- object(T)의 key(K)의 type : `K extends keyof T`

## 7. 제네릭 연습

### 7.1. 제네릭 사용하기(혼자 해보기)

- 4-oop-project(Stack) 을 복사 후 제네릭 적용

### 7.2. 제네릭 사용하기(solution)

## 8. 코딩 실력 향상 하기

### 8.1 ~ 2. API 읽어보기

- Array를 ctrl 클릭 후 오른쪽에 나오는 lib.es5.d.ts를 클릭해서 확인
- 또는 깃허브에서도 확인 가능

  - https://github.com/microsoft/TypeScript/blob/main/lib/lib.es5.d.ts

- toString, toLocaleString : Object에 들어 있는 함수, 배열에서도 사용가능

- concat 같이 같은 이름으로 된 것이 두 개 이상있으면 overloading이라고 함

  - 전달되는 인자(parameter)에 따라 어떤 것이 호출될지 결정 됨

```typescript
// overloading 된 method의 예시, every

// every 1
every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

// every 2
every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
// 배열에서 사용하는 T 타입을 상속하는 서브타입인 S
// 모든 value가 S 타입인지 아닌지 확인 하는 것
// is : User-defined types : 타입 predicate
```

- some은 every와 달리 하나라도 만족하면 true

### 8.3 오픈소스 프로젝트 이용하기

- 잘 작성된 코드를 읽기만 해도 실력향상에 도움이 됨
  - 오픈소스를 읽어보는 것도 좋음
    - e.g., visual studio code
  - 자주는 못 보더라도 실력을 향상하고 싶을 때 보면 좋음
  - 라이브러리를 사용할 때도 코드를 들여다 보면 더 좋음
  - 소스코드와 테스트는 어떤식으로 이루어지는지 확인도 가능

## 9. 에러(예외) 처리 하기

- Exception handling(예외 처리)

### 9.1 에러 처리 소개

- 어플리케이션을 사용 중 에러가 발생하거나 메모리 문제로 중지 될 수 있음
- Exception handling
  - 안정성, 유지보수성을 높일 수 있음
- Exception : 예상하지 못 한 이슈
  - 최대한 어플리케이션 내부에서 해결을 하려고 하다가 정 안되면 사용자에게 알려주는 것
- Error state : 예상할 수 있는 것(404 페이지)
- 예상할 수 있는 문제(Error: 오류)인지 아니면 예상할 수 없는 부분(Exception : 예외)인지 구분해서 사용할 필요가 있음

### 9.2 Error에 대해

```typescript
const array = new Array(100000000000000000000000000000000000123000000000000000);
// RangeError: Invalid array length
// RangeError는 Error클래스를 상속한 것
```

- 이 처럼 전혀 예상치 못한 이슈가 발생했을 때 쓸 수 있는 것이 에러

#### 예제 : 2-types-projects-quiz/game.ts

- switch문을 사용할 때에도 never type을 이용하면 모든 case를 다 작성했는지도 확인 가능

```typescript
function moveOfElly(direction: 'up' | 'down' | 'left' | 'right' | 'he') {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    case 'he':
      console.log('he');
      break;
    default:
      const invalid: never = direction;
      throw new Error(`unknown direction: ${direction}, ${invalid}`);
  }
}
```

### 9.3 에러 처리의 기본 (try, catch, finally)

- Error(exception) Handling : try -> catch -> finally
- 예외 처리를 해도 앱이 죽는 경우(정말 심각한 문제인 경우)

  - 메모리에 문제가 있거나
  - 복구할 수 없는 정말 심각한 경우

- try-catch를 사용해서 Error를 잡아서 앱이 죽지 않게 만들 수 있음
- finally는 문제가 발생하든 발생하지 않든 항상 실행 됨

### 9.4 우아하게 에러를 처리하는 방법

- 어디에서 에러 핸들링을 해야할까?
  - 에러를 받았을 때 우아하게 고급스럽게 처리하지 않는다면 catch하지 않는 것이 더 낫다.
    - 중간단계에서 깔끔하게 처리되는 것이 아니라면 마지막 사용하는 단계(App)에서 처리하도록 하는 편이 낫다.(코드를 사용하는 사람이 직접 에러처리를 할 수 있도록)
      - dialog나 alert같은 것으로 에러처리를 할 수 있음

### 9.5 막강한 Error State

- try-catch에서 catch에 전달되는 error는 any type임

  - catch에서 error를 잡는 순간 any 타입이 돼서 type에 대한 정보가 사라짐
    - instanceof를 사용할 수 없음

- 예상이 가능한 부분엔 throw를 남발하기 보단 ResultState를 return하는 것이 더 좋음

## 10. 타입스크립트의 핵심

### 10.1 막강한 타입들 소개

- Advanced types
  - Conditional types
  - Mapped Types
  - Utility Types

### 10.2 Type Alias와 Interface 뭘 써야 할까?(기술 측면)

- 0.8버전 부터 급격하게 성장해온 typescript(지금 이 시점에선 4.x 버전)
  - 예전엔 Type Alias보다 Interface가 할 수 있는 것이 더 많았음
- 정확하게 Type과 Interface가 어떻게 다른지
- 어떤 곳에서 어떻것을 사용해야 되는지 알아보자

#### Type vs Interface : 구현사항에 초점

- class에서 Type도 implement가능한 것은 오늘 처음 알게 되었다.
  - 하지만 Interface가 더 적절함
- extends 대신 &으로 Type도 확장을 할 수 있지만 결합은 Interface만 됨
  - 두번 선언해서 나중에 사용할 때 두군데 모두의 element를 사용해야만 하도록 하는 것
- Type만이 가능한 것들도 있음
  - Type aliases can use computed properties
  - Union type은 interface론 구현 불가능

### 10.3 Type Alias 와 Interface 뭘 써야 할까?(개념 측면)

- 정의부터 다시한번 짚어보자
  - Interface : 어떤 것의 규격사항
    - object간 의사소통을 할 때 서로간 상호작용을 도와주는 것
    - API는 계약서와 동일
    - 누군가가 구현해야될 사람이 있다면 interface
    - 다른 많은 프로그래밍 언어에서도 interface를 규격사항으로 사용함
  - Type : 어떤 데이터의 타입을 결정하는 것
    - interface로 type을 정의하면 이것을 구현하는 class가 있는 것으로 오해할 수 있음

### 10.4 Utility Type 이란?

- 타입 중 일부를 가져와서 쓸 수 있는 것

### 10.5 Index Type

```typescript
// object의 value에 obj['name'] 처럼 접근 하 듯 type에서도 같은 방법으로 접근 가능
type Animal = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};

type Name = Animal['name']; // string
type Gender = Animal['gender'];
```

### 10.6 Mapped Type

- VideoOptional같은 파생타입을 자동으로 만들어주는 타입
- 한번 만들어 놓으면 재사용성이 높음

```typescript
// Mapped Type
type Optional<T> = {
  // for...in 을 썼을 때와 동일(for...in : 하나씩 돌면서 연산을 수행)
  [P in keyof T]?: T[P]; // P(property)는 T(Type) 안에 있는 그 key(P)에 해당하는 value(T[P])의 타입에 optional('?')을 추가로 지정
};

type VideoOptional = Optional<Video>;

const videoOpt: VideoOptional = {
  title: 'hi', // 모든 요소가 optional로 되어 있어서 author를 사용하지 않아도 됨
};
```

### 10.7 Conditional Type

- type에도 조건에 따라 변하는 타입을 설정할 수 있음

```typescript
type Check<T> = T extends string ? boolean : number;

type Type = Check<'string'>; // 이해를 위한 예시 (실제로 이렇게 사용하진 않을 듯)
```

### 10.8 ReadOnly

- 인덱스 타입, 맵 타입, 컨디션 타입 => 기존 타입 보장 및 재사용
- 10.6에서 만든 Optional이나 Readonly같은 Utility 타입은 이미 타입스크립트에 만들어져있음

```typescript
// Readonly 사용 예
type ToDo = {
  title: string;
  description: string;
};

function display(todo: Readonly<ToDo>) {
  // 보여지게만 하는 함수인데 개발자가 업데이트를 할 수 있을 수 있음(가변성) => readonly(불변성)
  todo.title = 'jaja'; // Readonly를 사용했기 때문에 에러가 발생함
}
```

### 10.9 Partial Type

- `Partial<T>` : T의 각 요소를 optional로 만들어줌 `<->` `Required<T>`

```typescript
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### 10.10 Pick Type

- 기존의 타입에서 내가 원하는 타입만 골라서 제한적으로 사용하고 싶은 경우

```typescript
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

### 10.11 Omit Type

- `Omit<T>` : Pick과 반대로 원하는 것을 뺄 수 있음
- 빼고자 하는 것이 더 명확하다면 Omit을 사용하고
- 선택하고자 하는 것이 더 명확하다면 Pick을 사용하자

```typescript
/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;
```

- never type : 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미

#### 참고 문헌

- [never type](https://yamoo9.gitbook.io/typescript/types/never)

### 10.12 Record type

```typescript
type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact';

// Record<Page, PageInfo>
// page를 key로 삼고, PageInfo를 value로 삼으면 됨
// 자료구조 Map과 비슷하게 <하나, 다른하나>를 연결하고 싶을 때 사용
const nav: Record<Page, PageInfo> = {
  home: { title: 'home' },
  about: { title: 'about' },
  contact: { title: 'contact' },
};
```

### 10.13 etc

- readonly, partial는 대표적으로 많이 쓰이고
- 그 외 다른 타입들도 유용하게 쓰려고 하면 쓸 수 있음

## 11. Javascript 정리

### 11.1 JS -> TS

- Javascript를 알아야 Typescript도 잘한다.

### 11.2 프로토타입이란?

- 자바스크립트도 엄밀히 말하면 객체지향 프로그래밍 언어

  - 프로토타입을 기반으로 객체지향 프로그래밍을 할 수 있기 때문

- class나 interface도 compiler를 거치면 결국 프로토타입이 됨
- 프로토타입은 상속을 위한 것
- 단어 자체의 의미, Prototype : 추상적, 원형
- 속성과 함수들을 정의하는 것

### 11.3 프로토타입 데모

Array.prototype은 Object.prototype을 상속하기 때문에
toString같은 것을 공통으로 사용할 수 있음

- 예제는 간단히 개념만을 배우기 위함이고 실제로 prototype으로 상속해서 사용하려면 더 깊이있게 알아야함
  - 근데 그렇게 할 일 없음(요즘 브라우저들 (ES6 다됨)

### 11.4 This는 왜 미친걸까요?

- 자바스크립트 This가 어려운 이유
  - 다른 프로그래밍 언어의 this와 약간 성격이 다르기 때문
    - 다른 프로그래밍 언어의 this : 클래스 자신을 가리킴
    - 만들어진 객체
  - 자바스크립트의 this : 누가 호출하냐에 따라 달라짐
    - 호출한 문맥에 따라 달라짐

### 11.5 This 완벽 정리!

- Javascript의 this : 호출한 사람의 문맥(context)

```javascript
function helloWorld() {
  console.log('hello');
}
window.helloWorld(); // 함수는 window에서 호출이 가능함

// 그러나 const, let으로 선언된 것은 window에 등록되지 않음
const testFunc = () => {
  console.log('testFunc123');
  console.log(this);
};
window.testFunc(); // 에러 발생 : window에 등록되어 있지 않음 - 글로벌 객체에서 이용(접근)이 불가능

// 예외 : var로 선언한 것은 window에 등록이 되어짐 - 재정의도 가능하고 호이스팅도 되기 때문에 가급적 사용하지 않는게 좋음
```

```javascript
// binding method 1. bind
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
class Bob {}
bob.run = counter.increase.bind(counter);
bob.run();

// binding method 2. arrow function
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
class Bob {}
bob.run = counter.increase.bind(counter);
bob.run();
```

- arrow function을 이용하면 그 안에 있는 this는 선언될 당시의 문맥(context)를 유지함

- javascript의 this는 부르는 사람의 문맥에 따라 달라질 수 있으므로, bind를 호출하던지 아니면
- 클래스 내부에 바인딩을 하고 싶은 함수가 있다면 arrow function을 이용해야 함

### 11.6 모듈이란?

- 타입스크립트에서도 활용가능한 내용 : 모듈
- 모듈이란 ? 파일안에 코드를 모듈화해서 작성하는 것
- 모듈화 : 코드를 그 파일 내부에서만 한정적으로 작동하도록 하는 것

### 11.7 모듈 데모

- 모듈화 하지 않으면 window에 모두 등록되어서 같은 이름을 사용할 수 없음
- 모듈화 이후 export와 import를 이용해서 사용

## 12. 타입스크립트 컴파일러

### 12.1. TSConfig 셋업하기 (다수의 파일 실시간 컴파일 설정)

- tsc watch mode

#### 파일이 변경될 때 마다 컴파일 하는 것

- tsc [파일명] -w

#### 여러 파일을 사용할 때

- tsc --init
  - tsconfig.json 파일 생성 됨
  - tsc를 동작하면 tsconfig에 설정된 것에 맞게 컴파일링을 함
  - tsc -w
    - tsconfig가 있다면 tsconfig에 맞게 모든 ts파일을 js파일로 변환해주고 변화를 감지해서 실시간 변환을 해줌

### 12.2 프로젝트 구조 정리 하기

- 컴파일된 js파일이 ts파일과 섞이지 않도록 tsconfig에서 설정 가능

  - outDir

- 최상위 부터 내려가면서 ts가 처음 있는 곳이 build(js가 모이는 곳)에서도 최상위로 적용 됨

  - src안에만 ts가 있다면 build엔 src라는 폴더 없이 js가 컴파일되어서 들어감
  - 반면 src폴더와 logging폴더 각각에 ts가 들어있다면 build폴더에도 src, logging이 생성되면서 각각 js가 생성 됨
    - 보통은 최상위에서 폴더를 나누지 않음
    - src안에서 필요에 따라 src안에 폴더를 더 생성해서 나눠서 사용함

- 모든 ts파일을 src에서만 관리
  - rootDir : "./src"

#### tsconfig 추가 옵션

```typescript
// 제외하거나 포함할 파일에 대한 설정을 할 수 있음
{
  "compilerOptions": // ...
  "exclude": ["./src/dev.ts"]
}
```

### 12.3. 컴파일러 옵션들 파헤치기

- tsconfig.json의 각각의 요소들에 대해 알아보기
- basic options만 살펴봄

#### incremental

- 컴파일 될 때 마다 모든 파일을 새롭게 컴파일 하는 것이 아니라 이전 컴파일된 파일과 비교해서 수정된 사항이 없다면 그 부분을 유지하고 수정된 내용만 컴파일
- true로 설정 시 컴파일 시간 단축 가능
  - 대신 이전 컴파일 정보를 로컬에 보관하므로 프로그램 용량이 더 커질 수 있음

#### target

- 어떤 버전으로 컴파일 할 것인지 설정
  - 보통 ES5 또는 ES6를 많이 사용

#### module

- 모듈 정보를 어떻게 할 건지 결정
- 노드 프로젝트라면 commonjs
  - nodejs에선 import가 아닌 require를 이용해서 모듈을 이용할 수 있음
- 브라우저 환경이라면 ES 표준을 선택하는 것이 좋음

#### lib

- lib를 설정하지 않으면 module에서 설정한 것에 따라 그것을 이용
  - ES6라면 document.querySelector 같은 것이 기본으로 따라옴
- 보통은 따로 설정하지 않고 target에서 딸려 오는 것을 사용함

#### allowJs

- 프로젝트 안에서 javascript파일을 같이 쓸 것인지 결정

#### checkJs

- .js파일에서 무언가 잘 못 하고 있다면 에러가 뜰 수 있도록 설정
  - js와 ts를 같이 사용한다면 checkJs 옵션도 같이 사용하는 것이 좋음

#### JSX

- 리액트 관련된 것을 사용할 것인지 설정

#### declaration

- type 정의에 관련된 것
- 내가 작성한 코드를 라이브러리 형식으로 다른사람에게 제공할 것이 아니라면 잘 쓰이지 않음

#### sourceMap

- 나중에 디버깅할 때 유용하게 쓰일 수 있음
  - 나중에 디버깅편에서 자세히 다룸

#### outFile

- 내가 작성한 다수의 ts파일을 하나의 js파일로 만들 때 사용

#### outDir

- 컴파일된 js파일이 생성되는 곳

#### rootDir

- ts파일들이 모여있는 최상위 폴더

#### composite

- incremental 옵션과 같이 쓸 수 있음
- 이전에 빌드된 정보들을 기억하고 있어서 다음에 빌드할 때 더 빠르게 빌드할 수 있도록 도와줌

#### tsBuildInfoFile

- incremental옵션이 true이면 관련된 옵션이 담긴 파일을 저장할 곳을 지정할 수 있음

#### removeComments

- 코멘트를 다 없애주는 것

#### noEmit

- 컴파일 에러체크만 하고 컴파일된 js파일을 생성하지 않음

#### importHelpers, downlevelIteration

- 타입스크립트 코드를 아주 오래전에 js로 변환할 때 문제가 될 수 있는 부분이 있음. 그런 부분을 코드를 조금 더 더해서 안전하게 동작할 수 있도록 도와주는 것

#### isolatedModules

- 각각의 파일을 다른 모듈로 변환해서 만드는 것

#### Strict Type-Checking Options

- 기본적으로 strict이 true
  - false로 지정하면 그 아래에 각각 원하는 것만 선택해서 적용 가능
  - 그냥 기본적으로 strict를 true이용하자

#### 모듈 관련해서 세부 설정하는 옵션도 있음

#### Source Map관련

- 어디에 보관할 것인지 등을 설정

### 12.4 디버깅 하는 방법

- 내가 사용하는 코드는 ts이지만 브라우저가 사용하는 코드는 컴파일된 js임
  - 브라우저 개발툴의 source 탭에서 보면 ts로 작성된 코드는 없음
  - sourceMap을 이용하면 디버깅에 용이함

#### sourceMap을 이용한 디버깅(tsconfig.json)

- .map이라는 파일을 생성하겠다는 뜻
  - 내가 작성한 ts코드와 컴파일된 js코드를 연결시켜주는 모든 정보들이 담긴 파일
- js마다 .map파일이 생성되어 있음(브라우저에서 사용 됨)
- main.ts가 브라우저에 보이게 되고 브라우저에서 break포인트를 줄 수도 있음
- chrome 브라우저에서 디버깅을 하면 소스 뿐만 아니라 styling 같은 요소도 실시간으로 확인 가능 + 콘솔에서 여러가지 실험할 수 있음
  - 선택한 엘리먼트를 콘솔에서 $0으로 접근도 가능

#### vscode에서 디버깅

- extension 에서 debugger라고 검색
  - debugger for chrome
    - vscode안에서도 chrome과 연결해서 디버깅을 할 수 있도록 도와주는 앱
- DOM이나 CSS까지 확인하려면 브라우저 개발툴이 더 좋음

## 13. MOTION 실전 프로젝트 준비

- notion에서 영감을 받았지만 노션과는 전혀 다른 프로젝트

### 13.1 챕터 소개 및 엘리의 조언

- HTML, CSS, Typescript로 구현
- OOP
- Type Safety
- 자신을 --- 개발자로 한계 짓지 마라
  - 프론트엔드, 백엔드, 모바일, 시스템 등 상관 없이 해야되는 하고 싶은 성장해 나가고 싶은 모든 것을 다루는 개발자가 되자
- 스스로 생각하고 사고하고 문제를 해결하자
- 스스로 프로젝트를 계획하고 사고하고 만들고 문제를 해결하고 버그를 만나면 고생하면서 진행

### 13.2 프로젝트 디자인은 어떻게 구했나요?

```css
디자인 영감 Dribble: https://dribbble.com/shots/14931899-TIGERS

백그라운드 이미지 만드는 사이트: https://coolbackgrounds.io/

저의 백그라운드 이미지는 아래 첨부파일 다운로드 받아 보세요 :) 


프로젝트 전반적으로 쓰인 모든 색상 코드들:

:root {
  --bg-main-color: #00000080;

  --bg-accent-color: #2d2d2d;

  --accent-color: #f64435;

  --text-accent-color: #ffe498;

  --text-edit-bg-color: #575757;

  --border-color: #3f3f3f;

  --shadow-color: #202020;

  --document-bg-color: #68686850;

  --component-bg-gradient: radial-gradient(
    circle,
    #646464e6 0%,
    #363636e6 100%
  );

  --smokywhite: #dddbd8;

  --black: #000000;

  --translucent-black: #00000099;
}
```

#### 사이드 프로젝트에 도움이 되는 디자인 웹 사이트 및 앱

- dribbble.com
- 크롬 웹스토어 - color picker 검색하면 나오는 것들
- coolbackgrounds.io - 배경

### 13.3 사이드 프로젝트에 도움이 될 작은 선물

google : random image generator

- picsum.photos
  - https://picsum.photos/200/200

### 13.4 Motion 상세 데모 영상

- 기본 : 항목을 추가하면 드래그 앤 드랍으로 이동 가능, 닫기 버튼으로 삭제 가능
  - 이미지
  - 비디오
  - 텍스트
  - To do list

### 13.5 프로젝트 계획 세우는 테크닉

- 총 두가지 스탭

#### 1) 어떤 기능들이 있는가? (What are the features?)

- 명확하게 생각하고 정리해보기
- 하나하나 나열해보면서 정리

#### 2) What is the road map?

- 잘 다듬어진 로드맵으로 나누어서 하나씩 완성해가기 - 여러단계(마엘스톰)
- 각 단계가 끝날 때 마다 그 자체만으로도 시장에 배포할 수 있고 사용자가 쓸 수 있는 단계로 나누어서 만들어야 함

- 로드맵 구성

  - must have : 앱에서 꼭 있어야 된 주된 기능
    - 그것들 중에서 내가 어떤 것을 먼저 배포해 나갈 것인지 마엘스톤들로 나눠볼 수 있음
  - good to have : 필수는 아니지만 있으면 좋은 것들
    - 모든 must have가 구현되었다면 시작
  - nice to have

- 강의 초반에 공유한 노션을 이용해도 좋음

## MOTION 실전 프로젝트 만들기 편

- notion의 일부 기능을 만들어보는 프로젝트

### 14.1 ~ 14.2 프로젝트 셋업 & 컴파일러 설정

#### tsconfig.json 설정

- tsc --init
- module : 프론트엔드에서 작업하므로 ES2015
- ourDir : ./build 또는 ./dist(distribution의 약자) 로 설정
- rootDir : ./src
- removeComments : 배포용으로 만든 컴파일된 자바스크립트엔 코멘트를 남기지 않음
- noEmit 대신 noEmitOnError 옵션을 추가
  - 컴파일 에러 발생 시 더 이상 컴파일 하지 않음
- strict type checking
- additional check : 모든 추가적인 체크 활성화

### 14.2.1 프로젝트 구현 플랜

클래스 : 상태, 데이터를 가지고 있고 그 상태를 변화할 수 있는 밀접하게 연관된 함수들로 묶어진 하나의 덩어리

어플리케이션도 비슷

- header, footer, document로 나눌 수 있음
- document는 PageComponent 클래스를 만들어서 동적으로 추가된 데이터를 또 다른 컨테이너로 묶어서 페이지 않에서 추가할 수 있도록 할 예정
- 리액트의 컴포넌트 컨셉 + 객체지향 원칙을 이용해서 유연하게 만들 수 있을지 고민

App class

- PageComponent
- Dialog
- Image, Note, Video, Todo

### 14.3 레이아웃과 첫번째 Page 컴포넌트 만들기

- main : 1000px 이상에서 고정
- 기본적인 레이아웃 만들기
- PageComponent 만들기

- tsc -w
  - tsconfig가 있다면 tsconfig에 맞게 모든 ts파일을 js파일로 변환해주고 변화를 감지해서 실시간 변환을 해줌

### 14.4 ~ 14.5 레이아웃과 첫번째 Page 컴포넌트 만들기

- Element.insertAdjacentElement(position, element | text)
  - 엘리먼트에서 특정 위치에 노드 삽입

#### 참고

- https://powerku.tistory.com/115

### 14.6 DOM

EventTarget -> Node -> Element -> HTMLElement -> HTMLDivElement

### 14.7 이미지 컴포넌트 만들기

사용자에게 전달 받은 요소를 innerHTML로 설정하는 것은 위험함
-> titleElement.textContent = title; // 안전하게 처리

### 14.9 ~ 10. 컴포넌트 리팩터링(베이스 컴포넌트 만들기)
