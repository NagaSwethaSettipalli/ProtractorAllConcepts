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
exports.letCodeSignUpPage = void 0;
const protractor_1 = require("protractor");
const protractorBase_1 = require("../baseFunctions/protractorBase");
class letCodeSignUpPage extends protractorBase_1.ProtractorBase {
    constructor() {
        super(...arguments);
        this.nameInput = protractor_1.element(protractor_1.by.id("name"));
        this.emailInput = protractor_1.element(protractor_1.by.id("email"));
        this.passwordInput = protractor_1.element(protractor_1.by.id("pass"));
        this.TCCheckBox = protractor_1.element(protractor_1.by.id("agree"));
        this.signUpBtn = protractor_1.element(protractor_1.by.buttonText("SIGN UP"));
    }
    enterName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.nameInput, name);
        });
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.emailInput, email);
        });
    }
    enterPassword(pass) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.passwordInput, pass);
        });
    }
    clickTermAndCondition() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.TCCheckBox);
        });
    }
    clickSignUp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.signUpBtn);
        });
    }
}
exports.letCodeSignUpPage = letCodeSignUpPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0Q29kZVNpZ25VcFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9sZXRDb2RlU2lnblVwUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsb0VBQWdFO0FBRWhFLE1BQWEsaUJBQWtCLFNBQVEsK0JBQWM7SUFBckQ7O1FBRVcsY0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxrQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNwQyxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFtQnhELENBQUM7SUFqQmdCLFNBQVMsQ0FBQyxJQUFZOztZQUMvQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFDWSxVQUFVLENBQUMsS0FBYTs7WUFDakMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDbkQsQ0FBQztLQUFBO0lBQ1ksYUFBYSxDQUFDLElBQVk7O1lBQ25DLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3JELENBQUM7S0FBQTtJQUNZLHFCQUFxQjs7WUFDOUIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFDWSxXQUFXOztZQUNwQixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtDQUdKO0FBekJELDhDQXlCQyJ9