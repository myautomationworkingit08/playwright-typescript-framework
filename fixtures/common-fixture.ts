import { test as baseTest } from '../fixtures/pom-fixture';
import CommonApiUtils from '../utils/CommonApiUtils';
import { CommonUtils } from '../utils/CommonUtils';
import { AppFixtures } from './app-fixtures';

// type CommonFixtures = {
//     commonUtilsFixture: CommonUtils
// }

export const test = baseTest.extend<AppFixtures>({
    commonUtilsFixture: async ({ }, use) => {
        await use(new CommonUtils());
    },
    commonApiUtilsFixture: async ({ request }, use) => {
        await use(new CommonApiUtils(request));
    }
});