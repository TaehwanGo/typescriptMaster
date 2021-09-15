// just do it myself

// class Stack {
//   private _arr: number[];
//   constructor() {
//     this._arr = [];
//   }
//   push(param: number) {
//     // this._arr.push(param);
//     this._arr = [...this._arr, param];
//   }

//   pop() {
//     // return this._arr.pop();
//     return this._arr.splice(-1, 1)[0];
//   }

//   public get arr() {
//     return this._arr;
//   }
// }

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.arr);
// const popItem = stack.pop();
// console.log(popItem, stack.arr);

// hint
// condition : 언어 자체에서 제공하는 배열 메소드를 사용하지 않아야 함
// 연결 리스트를 사용 : Head가 첫 번째 연결
// 이중 연결 리스트 : 역방향으로도 연결되어 있음(stack엔 굳이 필요 없음)

// solution
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // 불변성을 유지해주는 것이 좋음(readonly)
  readonly value: string;
  readonly next?: StackNode;
};

// StackImpl : StackImplement
class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node: StackNode = { value, next: this.head }; // 새로들어온 것
    this.head = node;
    this._size++;
  }
  pop(): string {
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
