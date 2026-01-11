import { test, expect } from "../fixtures/hooks-fixture";
import loginModuleData from "../test-data/login-module-data.json";

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
})

test.describe("Invalid Login Tests", {
    tag: ['@InvalidLogin'],
    annotation: {
        type: 'Story Link',
        description: 'Link of the Story'
    }
}, async () => {
    test("[Login] Verify user can not login with invalid Password", {
        tag: ['@UI', '@DEMO'],
        annotation: {
            type: 'Test case Link',
            description: 'https://www.google.com'
        }
    }, async ({
        goToUrlFixture, loginPageFixture, commonUtilsFixture
    }) => {
        const decryptedUserName = commonUtilsFixture.decryptData(process.env.USER_NAME!);
        await loginPageFixture.loginToOrangeHrm(decryptedUserName, loginModuleData.wrong_password);
        await expect(loginPageFixture.invalidCredentialsErrorPopUp).toHaveText(loginModuleData.invalid_credential_error_msg);
        await expect(loginPageFixture.userNameInput).toBeVisible();
    })

    test("[Login] Verify user can not login with invalid Username", {
        tag: ['@UI', '@DEMO'],
        annotation: {
            type: 'Test case Link',
            description: 'https://www.google.com'
        }
    }, async ({
        goToUrlFixture, loginPageFixture, commonUtilsFixture
    }) => {
        const decryptedPassword = commonUtilsFixture.decryptData(process.env.PASSWORD!);
        await loginPageFixture.loginToOrangeHrm(loginModuleData.wrong_username, decryptedPassword);
        // await expect(loginPageFixture.invalidCredentialsErrorPopUp).toHaveText(loginModuleData.invalid_credential_error_msg);
        await expect(loginPageFixture.invalidCredentialsErrorPopUp).toHaveText('bdudiyi');
        await expect(loginPageFixture.userNameInput).toBeVisible();
    })
})

test("[Login] Verify user can not login with both invalid Username and Password", {
    tag: ['@UI', '@DEV'],
    annotation: {
        type: 'Test case Link',
        description: 'https://www.google.com'
    }
}, async ({
    goToUrlFixture, loginPageFixture
}) => {
    await loginPageFixture.loginToOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
    await expect(loginPageFixture.invalidCredentialsErrorPopUp).toHaveText(loginModuleData.invalid_credential_error_msg);
    await expect(loginPageFixture.userNameInput).toBeVisible();
})


test("[Login] Verify user is able to successfully login with valid Username and Password", {
    tag: ['@VISUAL', '@DEMO'],
    annotation: {
        type: 'Test Case Link',
        description: 'https://www.google.com'
    }
}, async ({
    page, goToUrlFixture, loginPageFixture, commonUtilsFixture, dashboardPageFixture, leftNavPageFixture
}) => {
    const decryptedUserName = commonUtilsFixture.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtilsFixture.decryptData(process.env.PASSWORD!);
    await loginPageFixture.loginToOrangeHrm(decryptedUserName, decryptedPassword);
    // await page.waitForURL(`${process.env.BASE_URL}web/index.php/dashboard/index`);
    // await expect(dashboardPageFixture.dashboardTitleText).toHaveText("Dashboard");
    await expect(leftNavPageFixture.orangeHrmLogo).toHaveScreenshot('OrangeHrmBrandLogo.png');
    await expect(leftNavPageFixture.leftNavPanel).toHaveScreenshot('LeftNavPanel.png');
})
