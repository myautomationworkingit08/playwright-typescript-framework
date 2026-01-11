import { expect } from '@playwright/test';
import {test} from '../fixtures/hooks-fixture';


// test.beforeEach("Before Each Hook", async({loginPageFixture})=>{
//     await loginPageFixture.goToOrangeHrm(process.env.BASE_URL!);
// })

// test.afterEach("After Each Hook", async({usersPageFixture})=>{
//     await usersPageFixture.logoutOfApplication();
// })

test("Temp test 1", async({page, goToUrlFixture})=>{

    // const userName = commonUtilsFixture.decryptData(process.env.USER_NAME!);
    // const password = commonUtilsFixture.decryptData(process.env.PASSWORD!);
    console.log(await page.title());
    // await loginPageFixture.loginToOrangeHrm(userName, password);
})

test("Temp test 2", async({page, goToUrlFixture})=>{
    await expect(page).toHaveTitle('OrangeHRM');
})

test("Temp test 3", async({page, goToUrlFixture, logoutFixture})=>{
    await expect(page).toHaveTitle('OrangeHRM');
})