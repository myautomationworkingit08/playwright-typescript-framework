import { Locator, Page } from "@playwright/test";

export class LoginPage{

    readonly page : Page;
    readonly userNameInput : Locator
    readonly passwordInput : Locator
    readonly loginButton : Locator
    readonly invalidCredentialsErrorPopUp : Locator

    constructor(page:Page){
        this.page = page
        this.userNameInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.invalidCredentialsErrorPopUp = page.getByText('Invalid credentials')
    }

    async goToOrangeHrm(url: string){
        await this.page.goto(url)
    }

    async loginToOrangeHrm(userName:string, password:string){
        console.log(`UserName: ${userName}`);
        console.log(`Password: ${password}`);
        await this.userNameInput.fill(userName)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}