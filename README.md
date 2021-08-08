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
