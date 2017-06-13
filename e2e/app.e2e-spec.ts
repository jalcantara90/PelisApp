import { PelisAppPage } from './app.po';

describe('pelis-app App', () => {
  let page: PelisAppPage;

  beforeEach(() => {
    page = new PelisAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
