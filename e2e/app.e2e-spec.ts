import { CobacliPage } from './app.po';

describe('cobacli App', function() {
  let page: CobacliPage;

  beforeEach(() => {
    page = new CobacliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
