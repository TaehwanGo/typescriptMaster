import { BaseComponent } from '../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    // note component에 필요한 요소들 - title, body
    super(String.raw`
        <section class="note">
            <h2 class="note__title"></h2>
            <p class="note__body"></p>
        </section>
    `);
    const titleElement = this.element.querySelector(
      '.note__title',
    )! as HTMLHeadElement;
    titleElement.textContent = title; // innerHtml로 하거나 위 super에서 넣으면 XSS의 위험이 있음

    const bodyElement = this.element.querySelector(
      '.note__body',
    )! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
