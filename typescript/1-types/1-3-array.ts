{
  // Array
  const fruits: string[] = ['tomato', 'banana'];

  const scores: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {
    // readonly가 붙으면 변경할 수 없음
    // fruits.push
  }

  // Tuple : 배열이지만 서로 다른 타입의 데이터를 담을 수 있음
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // 데이터를 사용하는 곳에서 이름을 정해야되는게 불편 함

  // react의 hooks는 tuple을 잘 사용한 예시임 : useState같은 경우 원하는 이름으로 정하는 것이 오히려 더 좋기 때문
  // 그렇지만 웬만하면 튜플은 사용하는 것을 권장하지 않음
}
