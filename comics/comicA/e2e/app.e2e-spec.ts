import { ComicAPage } from './app.po';

describe('comic-a App', () => {
  let page: ComicAPage;

  beforeEach(() => {
    page = new ComicAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
