import { FireBaseExamplePage } from './app.po';

describe('fire-base-example App', () => {
  let page: FireBaseExamplePage;

  beforeEach(() => {
    page = new FireBaseExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
