export class PageComponent {
  // 페이지, 부모 컨테이너에 대한 요소들을 가지고 있음
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement('ul');
    this.element.setAttribute('class', 'page');
    this.element.textContent = 'This is PageComponent';
  }

  // 외부에서 페이지 컴포넌트를 만들어서 필요한 곳에 이 페이지를 추가할 수 있는 함수
  // 부모 컨테이너에 이 페이지를 추가
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
