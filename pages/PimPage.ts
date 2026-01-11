import { Locator, Page } from "@playwright/test";


export class PimPage{
    readonly page: Page;
    readonly pimAddButton: Locator;
    readonly firstNameTextBox: Locator;
    readonly middleNameTextBox: Locator;
    readonly lastNameTextBox: Locator;
    readonly employeeSaveButton: Locator;
    readonly addedEmpNameHeading: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimAddButton = page.getByRole('button', { name: ' Add' });
        this.firstNameTextBox = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextBox = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextBox = page.getByRole('textbox', { name: 'Last Name' });
        this.employeeSaveButton = page.getByRole('button', { name: 'Save' });
        this.addedEmpNameHeading = page.locator("//div[contains(@class,'employee-name')]//h6");
    }

    /**
     * To add a new employee in the PIM module
     * @param firstName 
     * @param middleName 
     * @param lastName 
     */
    async addEmployee(firstName: string, middleName: string, lastName: string){
            await this.pimAddButton.click();
            await this.firstNameTextBox.fill(firstName);
            await this.middleNameTextBox.fill(middleName);
            await this.lastNameTextBox.fill(lastName);
            await this.employeeSaveButton.click();
        }

}