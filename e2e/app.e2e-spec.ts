import { Angular2ModalExamplePage } from './app.po';

describe('angular2-modal-example App', function() {
  let page: Angular2ModalExamplePage;

  beforeEach(() => {
    page = new Angular2ModalExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
