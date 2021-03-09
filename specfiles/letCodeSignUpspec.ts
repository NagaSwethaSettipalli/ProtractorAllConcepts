import { browser } from "protractor";
import { common } from "../commonFunctions/common";
import { letCodeHeaderPage } from "../pageObjects/letCodeHeaderPage";
import { letCodeSignUpPage } from "../pageObjects/letCodeSignUpPage";
import * as testData from "../testdata/userInfo.json"

describe('Validating signup funcionaliy', async()=>{
    let header = new letCodeHeaderPage();
    let signUp = new letCodeSignUpPage();
    let cmn = new common();
    beforeAll(async () => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(30000)
    })
    beforeEach(async () => {
        await browser.get("http://letcode.in")
        await header.clickSignUp()
    })
    it('To verify that user can sign up successfully', async()=>{
        let name = testData.signup.name;
        await signUp.enterName(name)
        await signUp.enterEmail(testData.signup.email)
        await signUp.enterPassword(testData.signup.password)
        await signUp.clickTermAndCondition()
        await signUp.clickSignUp()
        // toast
        await cmn.validateToast(`You have logged in ${name}`)
        await header.signOutIsDisplay();
        await header.clickSignOut()

    });
    it("To verify that sign up fail", async () => {
        await signUp.clickSignUp()
        await cmn.validateToast(testData.signup.invalid_email)
    });
    it("To verify that sign up fail", async () => {
        await signUp.enterEmail(testData.signup.email)
        await signUp.clickSignUp()
        await cmn.validateToast(testData.signup.invalid_password)
    });
    it("To verify that sign up fail", async () => {
        await signUp.enterPassword(testData.signup.password)
        await signUp.clickSignUp()
        await cmn.validateToast(testData.signup.invalid_email)
    })
});