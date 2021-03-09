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
exports.letCodeLoginPage = void 0;
const protractor_1 = require("protractor");
const protractorBase_1 = require("../baseFunctions/protractorBase");
class letCodeLoginPage extends protractorBase_1.ProtractorBase {
    constructor() {
        super(...arguments);
        this.emailInput = protractor_1.element(protractor_1.by.name("email"));
        this.passWordInput = protractor_1.element(protractor_1.by.name("password"));
        this.signInBtn = protractor_1.element(protractor_1.by.buttonText('LOGIN1'));
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.emailInput, email);
        });
    }
    enterPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearAndType(this.passWordInput, password);
        });
    }
    clickSignIn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.signInBtn);
        });
    }
}
exports.letCodeLoginPage = letCodeLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0Q29kZUxvZ2luUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2xldENvZGVMb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLG9FQUFpRTtBQUVqRSxNQUFhLGdCQUFpQixTQUFRLCtCQUFjO0lBQXBEOztRQUdXLGVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUN0QyxrQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQzVDLGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQVd2RCxDQUFDO0lBVGdCLFVBQVUsQ0FBQyxLQUFhOztZQUNqQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFDWSxhQUFhLENBQUMsUUFBZ0I7O1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FBQTtJQUNZLFdBQVc7O1lBQ3BCLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0NBQ0o7QUFoQkQsNENBZ0JDIn0=