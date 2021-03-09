"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const protractor_1 = require("protractor");
const common_1 = require("../commonFunctions/common");
const letCodeHeaderPage_1 = require("../pageObjects/letCodeHeaderPage");
const letCodeSignUpPage_1 = require("../pageObjects/letCodeSignUpPage");
const testData = __importStar(require("../testdata/userInfo.json"));
describe('Validating signup funcionaliy', () => __awaiter(void 0, void 0, void 0, function* () {
    let header = new letCodeHeaderPage_1.letCodeHeaderPage();
    let signUp = new letCodeSignUpPage_1.letCodeSignUpPage();
    let cmn = new common_1.common();
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.manage().timeouts().implicitlyWait(30000);
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://letcode.in");
        yield header.clickSignUp();
    }));
    it('To verify that user can sign up successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        let name = testData.signup.name;
        yield signUp.enterName(name);
        yield signUp.enterEmail(testData.signup.email);
        yield signUp.enterPassword(testData.signup.password);
        yield signUp.clickTermAndCondition();
        yield signUp.clickSignUp();
        // toast
        yield cmn.validateToast(`You have logged in ${name}`);
        yield header.signOutIsDisplay();
        yield header.clickSignOut();
    }));
    it("To verify that sign up fail", () => __awaiter(void 0, void 0, void 0, function* () {
        yield signUp.clickSignUp();
        yield cmn.validateToast(testData.signup.invalid_email);
    }));
    it("To verify that sign up fail", () => __awaiter(void 0, void 0, void 0, function* () {
        yield signUp.enterEmail(testData.signup.email);
        yield signUp.clickSignUp();
        yield cmn.validateToast(testData.signup.invalid_password);
    }));
    it("To verify that sign up fail", () => __awaiter(void 0, void 0, void 0, function* () {
        yield signUp.enterPassword(testData.signup.password);
        yield signUp.clickSignUp();
        yield cmn.validateToast(testData.signup.invalid_email);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0Q29kZVNpZ25VcHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjZmlsZXMvbGV0Q29kZVNpZ25VcHNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLHNEQUFtRDtBQUNuRCx3RUFBcUU7QUFDckUsd0VBQXFFO0FBQ3JFLG9FQUFxRDtBQUVyRCxRQUFRLENBQUMsK0JBQStCLEVBQUUsR0FBTyxFQUFFO0lBQy9DLElBQUksTUFBTSxHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztJQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFDckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUN2QixTQUFTLENBQUMsR0FBUyxFQUFFO1FBQ2pCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUMxQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixVQUFVLENBQUMsR0FBUyxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUN0QyxNQUFNLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLDhDQUE4QyxFQUFFLEdBQU8sRUFBRTtRQUN4RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUIsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUMsTUFBTSxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEQsTUFBTSxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtRQUNwQyxNQUFNLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUMxQixRQUFRO1FBQ1IsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLHNCQUFzQixJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ3JELE1BQU0sTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDaEMsTUFBTSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUE7SUFFL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7UUFDekMsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDMUIsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDMUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7UUFDekMsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUMsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDMUIsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUM3RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQVMsRUFBRTtRQUN6QyxNQUFNLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwRCxNQUFNLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUMxQixNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMxRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9