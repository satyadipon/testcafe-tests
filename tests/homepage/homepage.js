import { Selector } from 'testcafe';
import commonMethods from './commonMethods';

const login = Selector('a').withText('Login');
const header = Selector('div[data-settings] + div');
const subMenu = Selector('div[data-settings] + div ul[role="group"][aria-expanded="true"]');
const buttons = Selector('[data-elementor-type="wp-page"] .elementor-button-text');
const flag = Selector('[title="flags-de"]');
const popupText = Selector('[data-elementor-type="popup"] h3');
const footer = Selector('[data-elementor-type="footer"]')
const footerLegalMenu = Selector('#menu-legal a');
const closePopup = Selector('.eicon-close');


fixture `Getting Started`
    .page `https://www-test.testup.io/`;

test('Use Cases', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500)
        .hover(header.find('a').withText('Use Cases'),{ speed: 0.2 })
        .hover(header.find('a').withText('Professional Services'))
        .hover(header.find('a').withText('Use Cases'))
        .expect(subMenu.find('a').withText('Front-End Testing').visible).ok()
        .expect(subMenu.find('a').withText('End-to-End Testing').visible).ok()
        .expect(subMenu.find('a').withText('CI / CD').visible).ok()
        .expect(subMenu.find('a').withText('Deep Monitoring').visible).ok()
        .expect(subMenu.find('a').withText('Test-Driven Development (TDD)').visible).ok()
        .expect(subMenu.find('a').withText('Robotic Process Automation (RPA)').visible).ok()
        .expect(subMenu.find('a').withText('User Documentation Generation').visible).ok();
});

test('Help Center', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500)
        .hover(header.find('a').withText('Help Center'),{ speed: 0.2 })
        .hover(header.find('a').withText('Professional Services'))
        .hover(header.find('a').withText('Help Center'))
        .expect(subMenu.find('a').withText('Blog').visible).ok()
        .expect(subMenu.find('a').withText('Documentation').visible).ok()
        .expect(subMenu.find('a').withText('FAQ').visible).ok()
        .expect(subMenu.find('a').withText('Book Onboarding Session').visible).ok()
        .expect(subMenu.find('a').withText('About us').visible).ok();
});

test('Check Buttons', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500)
        .expect(buttons.nth(0).innerText).eql('Get started free')
        .expect(buttons.nth(1).innerText).eql('Book Demo');
});

test('Check Flag', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500)
        .expect(flag.visible).ok();
});

test('Check pop-up', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500)
        .scroll(buttons.nth(2),'bottom',{ speed: 0.2 })
        .wait(500)
        .expect(popupText.nth(0).innerText).eql('Well done so far!');

});

test('Verify all Use Cases menu links', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500);
        
    await commonMethods.gotoSubMenu('Use Cases', 'Front-End Testing');
    await commonMethods.assertPageText('Front-End Testing');
    await commonMethods.checkHeaderMenus()
    await commonMethods.checkGetStartedButton();

    await commonMethods.gotoSubMenu('Use Cases', 'End-to-End Testing');
    await commonMethods.assertPageText('End-to-End Testing');
    await commonMethods.checkHeaderMenus()
    await commonMethods.checkGetStartedButton();

    await commonMethods.gotoSubMenu('Use Cases', 'CI / CD');
    await commonMethods.assertPageText('CI / CD');
    await commonMethods.checkHeaderMenus()
    await commonMethods.checkGetStartedButton();

    await commonMethods.gotoSubMenu('Use Cases', 'Deep Monitoring');
    await commonMethods.assertPageText('Deep Monitoring');
    await commonMethods.checkHeaderMenus()
    await commonMethods.checkGetStartedButton();

    await commonMethods.gotoSubMenu('Use Cases', 'Test-Driven Development (TDD)');
    await commonMethods.assertPageText('Test-Driven Development (TDD)');
    await commonMethods.checkHeaderMenus()
    await commonMethods.checkGetStartedButton();

    await commonMethods.gotoSubMenu('Use Cases', 'Robotic Process Automation (RPA)');
    await commonMethods.assertPageText('Robotic Process Automation (RPA)');
    await commonMethods.checkHeaderMenus()
    await commonMethods.checkGetStartedButton();

    await commonMethods.gotoSubMenu('Use Cases', 'User Documentation Generation');
    await commonMethods.assertPageText('User Documentation Generation');
    await commonMethods.checkHeaderMenus()
    await commonMethods.checkGetStartedButton();

});

test('Verify all Help Center menu links', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500);

    await commonMethods.gotoSubMenu('Help Center', 'Blog');
    await commonMethods.assertPageText('Blog');
    await commonMethods.checkHeaderMenus();

    await commonMethods.gotoSubMenu('Help Center', 'Documentation');
    await commonMethods.assertPageText('Documentation');
    await commonMethods.checkHeaderMenus();

    await commonMethods.gotoSubMenu('Help Center', 'FAQ');
    await commonMethods.assertPageText('FAQ');
    await commonMethods.checkHeaderMenus();

    await commonMethods.gotoSubMenu('Help Center', 'Book Onboarding Session');
    await commonMethods.assertPageText('Book Onboarding Session');
    await commonMethods.checkHeaderMenus();

    await commonMethods.gotoSubMenu('Help Center', 'About us');
    await commonMethods.assertPageText('About us');
    await commonMethods.checkHeaderMenus();

});

test('Verify Professional Services link', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500);

    await commonMethods.gotoMenu('Professional Services');
    await commonMethods.assertPageText('Professional Services');
    await commonMethods.checkHeaderMenus();

});

test('Verify Pricing link', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500);

    await commonMethods.gotoMenu('Pricing');
    await commonMethods.assertPageText('Testup Pricing Bugs cost a lot more');
    await commonMethods.checkHeaderMenus();

});

test('Validate Footer', async t => {
    
    await t
        .maximizeWindow()
        .expect(await login.innerText).eql('Login')
        .wait(500)
        .scroll(footer,'bottom',{ speed: 0.2 })
        .click(closePopup)
        .expect(footer.find('img').visible).ok()
        .expect(footer.find('h5').nth(0).innerText).eql('Help Center')
        .expect(footer.find('h5').nth(1).innerText).eql('Legal');

    await t
    .click(footerLegalMenu.nth(0));
    await commonMethods.assertPageText('Terms and Conditions');

    await t
    .click(footerLegalMenu.nth(1));
    await commonMethods.assertPageText('Imprint');

    await t
    .click(footerLegalMenu.nth(2));
    await commonMethods.assertPageText('Data Privacy Policy');

    await t
    .click(footerLegalMenu.nth(3));
    await commonMethods.assertPageText('Cookie policy (EU)');

});

