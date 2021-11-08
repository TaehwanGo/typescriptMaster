import { BaseComponent } from '../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    // note component에 필요한 요소들 - title, body
    super(String.raw`
        <section class="todo">
            <h2 class="todo__title"></h2>
            <input type="checkbox" class="todo__checkbox">
        </section>
    `);
    const titleElement = this.element.querySelector(
      '.todo__title',
    )! as HTMLHeadingElement;
    titleElement.textContent = title; // innerHtml로 하거나 위 super에서 넣으면 XSS의 위험이 있음

    const todoElement = this.element.querySelector(
      '.todo__checkbox',
    )! as HTMLInputElement;
    todoElement.insertAdjacentText('afterend', todo);
  }
}
