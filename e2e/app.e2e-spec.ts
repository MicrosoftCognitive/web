import { EyeTouristPage } from './app.po';

describe('eye-tourist App', function() {
  let page: EyeTouristPage;

  beforeEach(() => {
    page = new EyeTouristPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
