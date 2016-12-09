import { NgFixerPage } from './app.po';

describe('ng-fixer App', function() {
  let page: NgFixerPage;

  beforeEach(() => {
    page = new NgFixerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
