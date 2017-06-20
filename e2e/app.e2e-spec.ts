import { JensAnimalsPage } from './app.po';

describe('jens-animals App', () => {
  let page: JensAnimalsPage;

  beforeEach(() => {
    page = new JensAnimalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
