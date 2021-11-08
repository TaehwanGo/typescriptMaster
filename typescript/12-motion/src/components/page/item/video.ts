import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(String.raw`
            <section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"></iframe>
                </div>
                <h3 class="video__title"></h3>
            </section>
        `);
    const iframe = this.element.querySelector(
      '.video__iframe',
    )! as HTMLIFrameElement;
    console.log('url', url);
    iframe.src = `https://www.youtube.com/embed/${this.getIdFromURL(url)}`; // url -> videoId -> embed
    const titleElement = this.element.querySelector(
      '.video__title',
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  getIdFromURL(url: string) {
    const urlArr = url.split('/');
    console.log('urlArr[urlArr.length - 1]', urlArr[urlArr.length - 1]);
    return urlArr[urlArr.length - 1];
  }
}

// <iframe
//   width="1280"
//   height="720"
//   src="https://www.youtube.com/embed/OzkHPNYruOk"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;
