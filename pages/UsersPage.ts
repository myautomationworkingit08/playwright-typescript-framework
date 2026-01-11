import { Locator, Page } from "@playwright/test";


export class UsersPage{

    readonly page: Page;
    readonly userDropDown: Locator;
    readonly logoutMenuItem: Locator;

    constructor(page: Page){
        this.page = page;
        this.userDropDown = page.locator("span[class='oxd-userdropdown-tab']");
        this.logoutMenuItem = page.locator("//li//a[text()='Logout']");
    }

    async clickOnUserDropDown(){
        await this.userDropDown.click();
    }

    async logoutOfApplication(){
        await this.clickOnUserDropDown();
        await this.logoutMenuItem.click();
    }
}