import { SocketNGPage } from './app.po';

describe('socket-ng App', () => {
  let page: SocketNGPage;

  beforeEach(() => {
    page = new SocketNGPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
