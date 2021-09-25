type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// 둘다 가능한 것 : ⭐
// object ⭐
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1, // interface가 결합되었으므로 반드시 z도 사용해야 됨
};
// class ⭐
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number; // interface가 결합되었으므로 반드시 z도 사용해야 됨
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
// 인터섹션 : Extends와 비슷하게 Type도 확장을 할 수 있음
type ZPositionType = PositionType & { z: number };

// only interfaces can be merged.
interface PositionInterface {
  // interface의 결합
  z: number;
}

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right'; // Union type
