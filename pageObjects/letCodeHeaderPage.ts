import { by, element, ElementFinder } from "protractor";
import {ProtractorBase} from "../baseFunctions/protractorBase";

export class letCodeHeaderPage extends ProtractorBase{

   
    public signupbutton=element(by.linkText("Sign up"));
    public loginbutton=element(by.linkText("Log in"));
    public signOut = element(by.linkText("Sign out"));

//methods
public async clickSignUp() {
    // await this.signUpBtn.click()
    await this.click(this.signupbutton);
}
public async clickLogin() {
    // await this.loginBtn.click()
    await this.click(this.loginbutton);
}
public async clickSignOut() {
    // await browser.sleep(5000)
    await this.click(this.signOut);
}
public async signOutIsDisplay() {
    // expect(await this.signOut.isDisplayed()).toBe(true);
    await this.assertTrue(this.signOut);
    console.log(await this.signOut.getText());
    }
}