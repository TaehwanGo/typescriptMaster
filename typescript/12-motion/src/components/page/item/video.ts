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
    const videoURL = this.convertToEmbeddedURL(url);
    if (!videoURL) {
      alert('can not find video id');
      throw new Error('can not find video id');
    }
    iframe.src = videoURL; // url -> videoId -> embed
    const titleElement = this.element.querySelector(
      '.video__title',
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  //   getIdFromURL(url: string) {
  //     const urlArr = url.split('/');
  //     console.log('urlArr[urlArr.length - 1]', urlArr[urlArr.length - 1]);
  //     return urlArr[urlArr.length - 1];
  //   }
  private convertToEmbeddedURL(url: string): string | undefined {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log('convertToEmbeddedURL match', match);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return undefined; // regex에 매칭되는 id가 없는 경우
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
