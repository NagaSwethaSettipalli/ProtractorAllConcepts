import { by, element } from "protractor";
import { ProtractorBase } from "../baseFunctions/protractorBase";

export class letCodeLoginPage extends ProtractorBase {


    public emailInput = element(by.name("email"))
    public passWordInput = element(by.name("password"))
    public signInBtn = element(by.buttonText('LOGIN1'))

    public async enterEmail(email: string) {
        await this.clearAndType(this.emailInput, email);
    }
    public async enterPassword(password: string) {
        await this.clearAndType(this.passWordInput, password);
    }
    public async clickSignIn() {
        await this.click(this.signInBtn);
    }
}