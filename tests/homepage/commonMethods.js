import {t, Selector } from 'testcafe';

class commonMethods {
    constructor () {
        this.login = Selector('a').withText('Login');
        this.header = Selector('div[data-settings] + div');
        this.subMenu = Selector('div[data-settings] + div ul[role="group"][aria-expanded="true"]');
        this.buttons = Selector('.elementor-button-text');
        this.flag = Selector('[title="flags-de"]');
        this.popupText = Selector('[data-elementor-type="popup"] h3');
        this.pageHeader = Selector('h1.elementor-heading-title');
    }

    async checkHeaderMenus() {
        await t
        .expect(this.header.find('a').withText('Use Cases').visible).ok()
        .expect(this.header.find('a').withText('Professional Services').visible).ok()
        .expect(this.header.find('a').withText('Pricing').visible).ok()
        .expect(this.header.find('a').withText('Help Center').visible).ok();
    }

    async checkGetStartedButton() {
        await t
        .expect(this.buttons.nth(0).innerText).eql('Get started free')
        .expect(this.buttons.nth(2).innerText).eql('Get started free');
    }

    async gotoSubMenu(menu, submenu) {
        await t
        .hover(this.header.find('a').withText(menu),{ speed: 0.2 })
        .hover(this.header.find('a').withText('Professional Services'))
        .hover(this.header.find('a').withText(menu))
        .click(this.subMenu.find('a').withText(submenu))
        .wait(500);
    }

    async gotoMenu(menu) {
        await t
        .click(this.header.find('a').withText(menu))
        .wait(500);
    }

    async assertPageText(text) {
        await t
        .expect(this.pageHeader.textContent).eql(text);
    }

    
}

export default new commonMethods();