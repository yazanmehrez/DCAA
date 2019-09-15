import { browser, by, element } from 'protractor';

export class NgEgretPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dcaa-root h1')).getText();
  }
}
