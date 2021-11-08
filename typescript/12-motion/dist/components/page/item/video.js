import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(String.raw `
            <section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"></iframe>
                </div>
                <h3 class="video__title"></h3>
            </section>
        `);
        const iframe = this.element.querySelector('.video__iframe');
        console.log('url', url);
        iframe.src = `https://www.youtube.com/embed/${this.getIdFromURL(url)}`;
        const titleElement = this.element.querySelector('.video__title');
        titleElement.textContent = title;
    }
    getIdFromURL(url) {
        const urlArr = url.split('/');
        console.log('urlArr[urlArr.length - 1]', urlArr[urlArr.length - 1]);
        return urlArr[urlArr.length - 1];
    }
}
