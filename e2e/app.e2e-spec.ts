import { MOVIEPage } from './app.po';

describe('movie App', () => {
  let page: MOVIEPage;

  beforeEach(() => {
    page = new MOVIEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
