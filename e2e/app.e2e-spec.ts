import { NgsufuskuPage } from './app.po';

describe('ngsufusku App', function() {
  let page: NgsufuskuPage;

  beforeEach(() => {
    page = new NgsufuskuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
