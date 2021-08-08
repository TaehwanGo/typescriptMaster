{
  /**
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down'; // 자동완성 기능을 지원
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    // 실제 사용은 Promise<LoginState> 형태가 될 것임
    return {
      response: {
        body: 'logged in !',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  // my code
  function myPrintLoginState(state: boolean): LoginState {
    if (!state) {
      return {
        reason: '😭',
      };
    }

    return {
      response: {
        body: '🎉',
      },
    };
  }

  // bad answer
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      // 'response'라는 key가 state 안에 있다면
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`); // LoginState는 두가지 밖에 없기 때문에 typescript가 알아서 reason을 추천까지 해줌
    }
  }

  // 2.11의 Discriminated Union으로 good answer를 1-6에서 작성
}
