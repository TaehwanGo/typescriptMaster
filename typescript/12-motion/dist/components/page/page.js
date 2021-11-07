import { BaseComponent } from '../component.js';
export class PageComponent extends BaseComponent {
    constructor() {
        super(String.raw `<ul class="page">This is PageComponent!</ul>`);
    }
}
