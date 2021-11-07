import { BaseComponent } from '../../component.js';
export class NoteComponent extends BaseComponent {
    constructor(title, body) {
        super(String.raw `
        <section class="note">
            <h2 class="note__title"></h2>
            <p class="note__body"></p>
        </section>
    `);
        const titleElement = this.element.querySelector('.note__title');
        titleElement.textContent = title;
        const bodyElement = this.element.querySelector('.note__body');
        bodyElement.textContent = body;
    }
}
