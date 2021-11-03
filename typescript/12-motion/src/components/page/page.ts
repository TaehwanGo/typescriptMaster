import { BaseComponent } from '../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  // 페이지, 부모 컨테이너에 대한 요소들을 가지고 있음
  constructor() {
    super(String.raw`<ul class="page">This is PageComponent!</ul>`); // 부모(상속받은) 클래스의 생성자 실행
  }
}
