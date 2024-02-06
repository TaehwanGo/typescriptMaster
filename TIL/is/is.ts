class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
}

class Cat extends Animal {
  color: string;
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
}

class Bird extends Animal {
  type: string;
  constructor(name: string, type: string) {
    super(name);
    this.type = type;
  }
}

// 타입 가드 함수
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).breed !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).color !== undefined;
}

const isBird = (animal: Animal): animal is Bird => {
  // return (animal as Bird).type !== undefined;
  return animal instanceof Bird;
};

type Color = "Red" | "Blue" | "Yellow";

const isBlue = (color: string): boolean => {
  return color === "Blue";
};

const isRed = (color: Color) => {
  return color === "Red";
};

function printPetInfo(animal: Animal) {
  if (isDog(animal)) {
    console.log(`${animal.name} is a dog of breed ${animal.breed}`);
  } else if (isCat(animal)) {
    console.log(`${animal.name} is a cat of color ${animal.color}`);
  } else {
    console.log("Unknown animal");
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Grey");

printPetInfo(dog); // 출력: Buddy is a dog of breed Golden Retriever
printPetInfo(cat); // 출력: Whiskers is a cat of color Grey
