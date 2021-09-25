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
