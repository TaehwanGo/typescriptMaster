{
  const obj = {
    name: 'tony',
  };

  // name 출력 방법
  obj.name; // 방법 1.
  obj['name']; // 방법 2.

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text: Name = 'hello'; // Name type은 Animal의 'name' key에 해당하는 type으로 string과 같아짐

  type Gender = Animal['gender'];

  type Keys = keyof Animal; // Animal의 모든 key가 string Union type으로 할당 됨 : 'name' | 'age' | 'gender'

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'tony',
    gender: 'male',
  };
}
