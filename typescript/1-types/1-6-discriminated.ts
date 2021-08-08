{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success'; // 동일한 result를 갖고 있지만 어떤 state냐에 따라 값이 다름
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function newLogin(id: string, password: string): LoginState {
    // 실제 사용은 Promise<LoginState> 형태가 될 것임
    return {
      result: 'success',
      response: {
        body: 'logged in !',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  // good answer
  function newPrintLoginState(state: LoginState) {
    if (state.result === 'success') {
      // 'response'라는 key가 state 안에 있다면
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`); // LoginState는 두가지 밖에 없기 때문에 typescript가 알아서 reason을 추천까지 해줌
    }
  }
}
