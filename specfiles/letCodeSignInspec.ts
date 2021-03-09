import { browser } from "protractor"
import { common } from "../commonFunctions/common";
import { letCodeHeaderPage } from "../pageObjects/letCodeHeaderPage";
import { letCodeLoginPage } from "../pageObjects/letCodeLoginPage";
import * as testData from "../testdata/userInfo.json";

describe('validating letcode website Login funcionlity ', async() => {
    let header = new letCodeHeaderPage();
    let signin = new letCodeLoginPage();
    let cmn = new common();

    beforeAll(async () => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(10000)
    })
    beforeEach(async () => {
        await browser.get(browser.params.env)
        await header.clickLogin()
    })

  it('To verify that user can sign in successfully', async() =>{
    await signin.enterEmail(testData.login.email);
   // await attachScreenshot('Enter email');
   await signin.enterPassword(testData.login.password);
   await signin.clickSignIn()
   await cmn.validateToast(testData.login.welcome_message);
  });
  
  it("To verify tha user can signout successfully", async()=>{
    await header.signOutIsDisplay()
    await header.clickSignOut();
  });
  it("To verify that login fails", async () => {
    await signin.enterEmail(testData.login.email)
    await signin.enterPassword(testData.login.wrong_password)
    await signin.clickSignIn()
    await cmn.validateToast(testData.login.invalid_password)
});

it("To verify that login fails", async () => {
    await signin.enterEmail("koushik@let")
    await signin.enterPassword(testData.login.password)
    await signin.clickSignIn()
    await cmn.validateToast(testData.login.invalid_email)
})
});