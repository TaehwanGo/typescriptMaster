{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // 보여지게만 하는 함수인데 개발자가 업데이트를 할 수 있을 수 있음(가변성) => readonly(불변성)
    // todo.title = 'jaja';
  }
}
