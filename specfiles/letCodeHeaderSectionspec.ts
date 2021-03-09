import { browser } from "protractor"
import { ProtractorBase } from "../baseFunctions/protractorBase"
import { letCodeHeaderPage } from "../pageObjects/letCodeHeaderPage"


describe('Validating LetCode Header section', async()=>{

    let hPage = new letCodeHeaderPage();
    let pbase = new ProtractorBase();

    beforeAll(async () => {
        await browser.manage().window().maximize()
        await browser.manage().timeouts().implicitlyWait(10000)
    })
    beforeEach(async () => {
     //   await browser.get(browser.params.env)
     await browser.get("http://letcode.in")
    })
    it('Verify SignUp and Login button are displayed', async()=>{
        pbase.assertTrue(hPage.signupbutton);
        pbase.assertTrue(hPage.loginbutton);

    })
    
})