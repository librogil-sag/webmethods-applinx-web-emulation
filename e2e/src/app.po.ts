import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return browser.getTitle() as Promise<string>;
  }

  getVersion(): Promise<string> {
    return element(by.cssContainingText('.dlt-form-label', 'Version:')).getText() as Promise<string>;
  }
}
