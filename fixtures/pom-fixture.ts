import {test as baseTest} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {DashboardPage} from "../pages/DashboardPage";
import { UsersPage } from "../pages/UsersPage";
import { AppFixtures } from "./app-fixtures";
import { LeftNavigationPage } from "../pages/LeftNavigationPage";
import { PimPage } from "../pages/PimPage";

// type PomFixtureType = {
//     loginPageFixture : LoginPage,
//     dashboardPageFixture : DashboardPage,
//     usersPageFixture : UsersPage
// }

export const test = baseTest.extend<AppFixtures>({
    loginPageFixture: async({page}, use)=>{
        // const loginPageObj = new LoginPage(page)
        // use(loginPageObj)
        await use(new LoginPage(page));
    },
    dashboardPageFixture: async({page}, use)=>{
        await use(new DashboardPage(page));
    },
    usersPageFixture: async({page}, use)=>{
        await use(new UsersPage(page));
    },
    leftNavPageFixture: async({page}, use)=>{
        await use(new LeftNavigationPage(page));
    },
    pimPageFixture: async({page}, use)=>{
        await use(new PimPage(page));
    }
});