{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    coffeeBeans: number = 0;
    BEANS_GRAM_PER_SHOT = 7;
    constructor(initialShots: number) {
      this.coffeeBeans += initialShots * this.BEANS_GRAM_PER_SHOT;
    }

    makeCoffee(shots: number, hasMilk?: boolean): CoffeeCup {
      if (this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!!');
      }
      this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: !!hasMilk,
      };
    }
  }

  const coffeeMachine = new CoffeeMachine(3);
  const coffee = coffeeMachine.makeCoffee(2);
  console.log(coffee);
}
