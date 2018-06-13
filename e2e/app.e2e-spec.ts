import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('service-public-rci App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //pending("nothing")
  it('should display welcome message', () => {
    page.navigateTo();
	expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
