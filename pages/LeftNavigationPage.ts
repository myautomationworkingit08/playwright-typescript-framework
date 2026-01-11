import { Locator, Page } from "@playwright/test";


export class LeftNavigationPage{
    readonly page: Page;
    readonly pimLink: Locator;
    readonly orangeHrmLogo: Locator;
    readonly leftNavPanel: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.orangeHrmLogo = page.locator('.oxd-brand-banner');
        this.leftNavPanel = page.locator('.oxd-sidepanel-body');
    }

    /**
     * To click on the PIM Module in Left Nav Pannel
     */
    async openPimModule(){
        await this.pimLink.click();
    }
}