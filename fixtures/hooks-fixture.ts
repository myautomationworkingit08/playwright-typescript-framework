import {test as baseTest} from '../fixtures/common-fixture';
import { AppFixtures } from './app-fixtures';
import apiPathData from "../test-data/api-data/api-path-data.json";
import restFulBookerData from "../test-data/api-data/restful-booker-api-module-data.json";


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
    },

    createBookingFixture: async(
        {request}, 
        use
    ) => {
        const createResp = await request.post(apiPathData.booking_path, {
      data: restFulBookerData.create_booking_hook
    });

    const body = await createResp.json();
    const bookingId = body.bookingid;
    await use(bookingId);
    }
});

export {expect} from "@playwright/test";