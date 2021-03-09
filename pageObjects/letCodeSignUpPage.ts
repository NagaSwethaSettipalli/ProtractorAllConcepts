import { by, element } from "protractor"
import { ProtractorBase } from "../baseFunctions/protractorBase"

export class letCodeSignUpPage extends ProtractorBase
{
    public nameInput = element(by.id("name"))
    public emailInput = element(by.id("email"))
    public passwordInput = element(by.id("pass"))
    public TCCheckBox = element(by.id("agree"))
    public signUpBtn = element(by.buttonText("SIGN UP"))

    public async enterName(name: string) {
        await this.clearAndType(this.nameInput, name);
    }
    public async enterEmail(email: string) {
        await this.clearAndType(this.emailInput, email)
    }
    public async enterPassword(pass: string) {
        await this.clearAndType(this.passwordInput, pass)
    }
    public async clickTermAndCondition() {
        await this.click(this.TCCheckBox);
    }
    public async clickSignUp() {
        await this.click(this.signUpBtn);
    }


}
