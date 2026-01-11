import {test as baseTest} from '../fixtures/common-fixture';
import { AppFixtures } from './app-fixtures';

// type HooksFixtureType = {
//     goToUrlFixture: any;
//     logoutFixture: any;
// }

export const test = baseTest.extend<AppFixtures>({
    goToUrlFixture: async(
        {loginPageFixture}: AppFixtures, 
        use
    ) => {
        await loginPageFixture.goToOrangeHrm(process.env.BASE_URL!);
        await use();
    },

    logoutFixture: async(
        {usersPageFixture}: AppFixtures, 
        use
    ) => {
        await use();
        await usersPageFixture.logoutOfApplication();
    }
});

export {expect} from "@playwright/test";