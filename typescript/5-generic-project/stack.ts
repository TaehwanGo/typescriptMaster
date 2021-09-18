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
    const node: StackNode<T> = { value, next: this.head }; // 새로들어온 것
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

const stack = new StackImpl(10);
stack.push('tony1');
stack.push('tony2');
stack.push('tony3');

while (stack.size !== 0) {
  console.log(stack.pop());
}
