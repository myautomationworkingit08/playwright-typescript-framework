import {expect, test} from "../../fixtures/hooks-fixture";
import pimModuleData from "../../test-data/ui-data/pim-module-data.json";

test("[PIM] Verify a new Employee is successfully created under PIM Module", {
    tag: ['@UI', '@DEMO'],
    annotation:{
        type: 'Test case Link',
        description: 'https://www.google.com'
    }
}, async({
    page, goToUrlFixture, leftNavPageFixture, pimPageFixture
}) => {{
    await test.step("Open PIM Module", async()=>{
        await leftNavPageFixture.openPimModule();
    })
    await test.step("Add an Employee in PIM Module", async()=>{
        await pimPageFixture.addEmployee(
        pimModuleData.first_name, 
        pimModuleData.middle_name,
        pimModuleData.last_name
    );
    await page.waitForTimeout(3000);
    })
    await test.step("Verify that the Employee got added", async()=>{
        await expect(pimPageFixture.addedEmpNameHeading)
    .toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`);
    })
}})