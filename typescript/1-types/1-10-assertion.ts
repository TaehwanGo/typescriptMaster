{
  /**
   * Type Assertions ๐ฉ
   */
  // ์ธ๋ถ์์  js๊ฐ ๋ญ ๋ฆฌํดํ๋์ง ์ ์ ์์ง๋ง ๋ด๋ถ์ ์ผ๋ก  ํญ์ ๋ฌธ์์ด์ ๋ฆฌํดํ๋ ํจ์๊ฐ ์๋ค๊ณ  ๊ฐ์ 
  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  // return.length // ๋ฌธ์์ด ๊ด๋ จ api๋ฅผ ์ฌ์ฉํ  ์ ์์
  console.log((result as string).length); // ์ด๋ ๊ฒ ์บ์คํ์ ํ  ์ ์์ - ๊ทธ๋ฌ๋ฉด string์ api๋ฅผ ์ฌ์ฉ๊ฐ๋ฅ

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers?.push(2);
  numbers!.push(2); // ๐ฑ

  const button = document.querySelector('class')!; // 100% ํ์  ํ ๋ ๋ง ์จ์ผ ํจ
  button?.nodeValue;
}
