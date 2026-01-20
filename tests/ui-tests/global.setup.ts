import {test} from "../../fixtures/common-fixture";
import { expect } from "@playwright/test";

test("Global setup for Auto Login", async({page, loginPageFixture, commonUtilsFixture, dashboardPageFixture})=>{

    const decryptedUserName = commonUtilsFixture.decryptData(process.env.USER_NAME!);
    const decryptedPassword = commonUtilsFixture.decryptData(process.env.PASSWORD!);
    await loginPageFixture.goToOrangeHrm(process.env.BASE_URL!);
    console.log(`Decrypted UserName: ${decryptedUserName}`);
    console.log(`Decrypted Password: ${decryptedPassword}`);
    await loginPageFixture.loginToOrangeHrm(decryptedUserName, decryptedPassword);
    await page.waitForURL(`${process.env.BASE_URL}web/index.php/dashboard/index`);
    await expect(dashboardPageFixture.dashboardTitleText).toHaveText("Dashboard");
    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })
})