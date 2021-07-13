import { Selector } from 'testcafe';

const login = Selector('a').withText('Login');
const header = Selector('div[data-settings] + div');
const subMenu = Selector('div[data-settings] + div ul[role="group"][aria-expanded="true"]');
const buttons = Selector('[data-elementor-type="wp-page"] .elementor-button-text');
const flag = Selector('[title="flags-de"]');
const popupText = Selector('[data-elementor-type="popup"] h3');

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

