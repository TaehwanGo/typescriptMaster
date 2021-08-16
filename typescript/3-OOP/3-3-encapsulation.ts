{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public (default)
  // private
  // protected : 외부에선 불가능 하지만 상속 후 자식 class에선 가능
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level로 지정이 됨
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      // constructor 대신 static method를 이용하게 권장
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(30);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34; // invalid
  maker.fillCoffeeBeans(30);
}
