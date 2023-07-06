class Page {
  constructor() {
    this.title = "Test Page";
  }

  async open(path) {
    await browser.maximizeWindow();
    await browser.url(path);
  }
}

export default Page;
