import { PageComponent } from './components/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

new App(document.querySelector('.document')! as HTMLElement); // 동적으로 만드는 것이 아니고 정해져 있으면 확신있게 해도 됨
