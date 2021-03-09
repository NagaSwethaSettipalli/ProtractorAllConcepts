"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.letCodeHeaderPage = void 0;
const protractor_1 = require("protractor");
const protractorBase_1 = require("../baseFunctions/protractorBase");
class letCodeHeaderPage extends protractorBase_1.ProtractorBase {
    constructor() {
        super(...arguments);
        this.signupbutton = protractor_1.element(protractor_1.by.linkText("Sign up"));
        this.loginbutton = protractor_1.element(protractor_1.by.linkText("Log in"));
        this.signOut = protractor_1.element(protractor_1.by.linkText("Sign out"));
    }
    //methods
    clickSignUp() {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.signUpBtn.click()
            yield this.click(this.signupbutton);
        });
    }
    clickLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.loginBtn.click()
            yield this.click(this.loginbutton);
        });
    }
    clickSignOut() {
        return __awaiter(this, void 0, void 0, function* () {
            // await browser.sleep(5000)
            yield this.click(this.signOut);
        });
    }
    signOutIsDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            // expect(await this.signOut.isDisplayed()).toBe(true);
            yield this.assertTrue(this.signOut);
            console.log(yield this.signOut.getText());
        });
    }
}
exports.letCodeHeaderPage = letCodeHeaderPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0Q29kZUhlYWRlclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9sZXRDb2RlSGVhZGVyUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFDeEQsb0VBQStEO0FBRS9ELE1BQWEsaUJBQWtCLFNBQVEsK0JBQWM7SUFBckQ7O1FBR1csaUJBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM3QyxnQkFBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNDLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQW9CdEQsQ0FBQztJQWxCRCxTQUFTO0lBQ0ksV0FBVzs7WUFDcEIsK0JBQStCO1lBQy9CLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBQ1ksVUFBVTs7WUFDbkIsOEJBQThCO1lBQzlCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBQ1ksWUFBWTs7WUFDckIsNEJBQTRCO1lBQzVCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBQ1ksZ0JBQWdCOztZQUN6Qix1REFBdUQ7WUFDdkQsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtDQUNKO0FBekJELDhDQXlCQyJ9