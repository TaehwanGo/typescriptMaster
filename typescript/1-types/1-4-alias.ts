{
  /**
   * Type Aliases : 새로운 타입을 정할 수 있음
   */

  type Text = string;
  const name: Text = 'tony';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    // animal: 'dog', 불가능
    name: 'tony',
    age: 12,
  };

  /**
   * String Literal Types
   */

  type Name = 'name';
  let tonyName: Name;
  tonyName = 'name'; // 'd' 불가능
}
