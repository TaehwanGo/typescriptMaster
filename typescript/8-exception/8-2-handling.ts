{
  class TimeoutError extends Error {}

  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network!');
    }
  }

  class UserService {
    // composition - dependency injection 으로 client: NetworkClient를 전달해서 사용
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login...
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  // service.login();

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login(); // App을 실행(run)하면 자동으로 로그인하는 App임
      } catch (error) {
        // show dialog to user : 네트워크가 없으니 다시 확인해보라는 메세지를 띄울 수 있음
        if (error instanceof OfflineError) {
          // catch에서 error를 잡는 순간 any 타입이 돼서 type에 대한 정보가 사라짐 : instanceof를 사용할 수 없음
        }
      }
    }
  }

  const app = new App(service);
  app.run();
}
