/**
 * 조건부 타입(Conditional Type)
 * - 입력된 제네릭 파입에 따라 타입을 결정
 * - T extends U ? X : Y
 * - 참고: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
 */

class Subject {
  constructor(public readonly name: string, public readonly score: number) {}
  printName() {
    console.log(this.name);
  }
}

class EnglishSubject extends Subject {
  // ...
}

class MathSubject extends Subject {
  // ...
}

type Category = "english" | "math";

type SubjectType<T extends Category> = T extends "english"
  ? EnglishSubject
  : T extends "math"
  ? MathSubject
  : never;

export function getSubject<T extends Category>(
  category: T,
  name: string,
  score: number
): SubjectType<T> {
  switch (category) {
    case "english":
      return new EnglishSubject(name, score) as SubjectType<T>;
    case "math":
      return new MathSubject(name, score) as SubjectType<T>;
    default:
      throw new Error("Unknown category");
  }
}

const english = getSubject("english", "English", 100);

english.printName(); // English
