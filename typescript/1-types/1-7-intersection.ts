{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  // intersection type을 parameter로 갖는 함수 호출 시 두 가지 모든 데이터가 들어 있는 오브젝트를 전달해야 함
  internWork({
    name: 'tony',
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
