{
  //   function checkNotNull(arg: number | null): number {
  //     if (arg == null) {
  //       throw new Error('not valid number!');
  //     }
  //     return arg;
  //   }

  //   function checkNotNull(arg: any | null): any {
  //     if (arg == null) {
  //       throw new Error('not valid number!');
  //     }
  //     return arg;
  //   }
  //   console.log(checkNotNull(123));
  //   checkNotNull(null);

  function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boolean: boolean = checkNotNull(true);
  console.log(number);
  checkNotNull(null);
}
