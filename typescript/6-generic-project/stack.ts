interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  // 불변성을 유지해주는 것이 좋음(readonly)
  readonly value: T;
  readonly next?: StackNode<T>;
};

// StackImpl : StackImplement
class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size(): number {
    return this._size;
  }

  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node = { value, next: this.head }; // head가 StackNode<T>으로 명시되었으므로 head에 node를 넣는 코드가 다음줄에 있으니 type추론을 이용하여 타입을 생략할 수 있음
    this.head = node;
    this._size++;
  }
  pop(): T {
    // null == undefined : true
    if (this.head == null) {
      // null 또는 undefined를 걸러줌
      throw new Error('Stack is empty');
    }
    const node = this.head; // 제거하고자 하는 것
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);
stack.push('tony1');
stack.push('tony2');
stack.push('tony3');

while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}
