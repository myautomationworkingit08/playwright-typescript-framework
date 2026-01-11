import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { CommonUtils } from "../utils/CommonUtils";
import { UsersPage } from "../pages/UsersPage";
import { LeftNavigationPage } from "../pages/LeftNavigationPage";
import { PimPage } from "../pages/PimPage";


export type AppFixtures = {
    loginPageFixture : LoginPage;
    dashboardPageFixture : DashboardPage;
    usersPageFixture : UsersPage;
    commonUtilsFixture: CommonUtils;
    goToUrlFixture: void;
    logoutFixture: void;
    leftNavPageFixture: LeftNavigationPage;
    pimPageFixture: PimPage;
};