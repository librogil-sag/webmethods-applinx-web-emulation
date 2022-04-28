import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('ApplinX Web Emulation', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('ApplinX Web Application');
  });

  it('should display version number', () => {
    page.navigateTo();
    expect(page.getVersion()).toContain('Version: 10.15');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
