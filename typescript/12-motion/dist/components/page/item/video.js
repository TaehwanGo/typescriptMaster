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
        const videoURL = this.convertToEmbeddedURL(url);
        if (!videoURL) {
            alert('can not find video id');
            throw new Error('can not find video id');
        }
        iframe.src = videoURL;
        const titleElement = this.element.querySelector('.video__title');
        titleElement.textContent = title;
    }
    convertToEmbeddedURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        console.log('convertToEmbeddedURL match', match);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return undefined;
    }
}
