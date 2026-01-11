import {test as baseTest} from '../fixtures/pom-fixture';
import { CommonUtils } from '../utils/CommonUtils';
import { AppFixtures } from './app-fixtures';

// type CommonFixtures = {
//     commonUtilsFixture: CommonUtils
// }

export const test = baseTest.extend<AppFixtures>({
    commonUtilsFixture: async({}, use)=>{
        await use(new CommonUtils());
    }
});