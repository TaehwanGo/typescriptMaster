// Java : Exception 이라는 클래스가 있음
// Javascript : Error 라는 클래스가 있음

// const array = new Array(100000000000000000000000000000000000123000000000000000);

// Error(exception) Handling : try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  console.log(`${fileName} closeFile`);
}

// const fileName = 'file';
// const fileName = 'not exist!';
// try {
//   console.log(readFile(fileName));
// } catch (error) {
//   console.error(`catch !!`);
// } finally {
//   closeFile(fileName);
// }

function run() {
  const fileName = 'not exist!';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.error(`catch !!`);
    return; // 이 경우 try-catch 이후 코드가 실행되지 않으므로
    // try-catch와 연관된 코드인 closeFile은 finally를 이용하는 것이 좋음
  }
  closeFile(fileName);
  console.log('closed!');
}

run();
