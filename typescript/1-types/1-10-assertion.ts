{
  /**
   * Type Assertions 💩
   */
  // 외부에선 js가 뭘 리턴하는지 알 수 없지만 내부적으론 항상 문자열을 리턴하는 함수가 있다고 가정
  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  // return.length // 문자열 관련 api를 사용할 수 없음
  console.log((result as string).length); // 이렇게 캐스팅을 할 수 있음 - 그러면 string의 api를 사용가능

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers?.push(2);
  numbers!.push(2); // 😱

  const button = document.querySelector('class')!; // 100% 확신 할때 만 써야 함
  button?.nodeValue;
}
