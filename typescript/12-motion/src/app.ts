import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300',
    );
    image.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('Note Title', 'Note body');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    todo.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent(
      'Video Title',
      'https://www.youtube.com/watch?v=OzkHPNYruOk',
    );
    video.attachTo(appRoot, 'beforeend');

    const testString = 'https://www.youtube.com/watch?v=OzkHPNYruOk,http';
    const resultOfRegex = testString.match(/(http)/g);
    console.log('resultOfRegex', resultOfRegex);
  }
}

new App(document.querySelector('.document')! as HTMLElement); // 동적으로 만드는 것이 아니고 정해져 있으면 확신있게 해도 됨
