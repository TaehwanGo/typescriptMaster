{
  type Video = {
    title: string;
    author: string;
  };

  // type VideoOptional = {
  //     title?: string;
  //     author?: string;
  // }

  // type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  // }

  // 배열의 map과 비슷한 Mapped Type
  // 배열의 map 예시
  [1, 2].map(item => item * 2); // [2, 4];

  // Mapped Type
  type Optional<T> = {
    // for...in 을 썼을 때와 동일(for...in : 하나씩 돌면서 연산을 수행)
    [P in keyof T]?: T[P]; // P(property)는 T(Type) 안에 있는 그 key(P)에 해당하는 value(T[P])의 타입에 optional('?')을 추가로 지정
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  const videoOpt: VideoOptional = {
    title: 'hi', // 모든 요소가 optional로 되어 있어서 author를 사용하지 않아도 됨
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'tony',
  };

  //   video.author = 'toni'; // readonly이기 때문에 변경 불가

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  // 활용 예제 : Typescript 문서에 있는 것
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
