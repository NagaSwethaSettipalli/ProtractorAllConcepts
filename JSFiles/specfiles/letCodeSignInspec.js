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
const letCodeLoginPage_1 = require("../pageObjects/letCodeLoginPage");
const testData = __importStar(require("../testdata/userInfo.json"));
describe('validating letcode website Login funcionlity ', () => __awaiter(void 0, void 0, void 0, function* () {
    let header = new letCodeHeaderPage_1.letCodeHeaderPage();
    let signin = new letCodeLoginPage_1.letCodeLoginPage();
    let cmn = new common_1.common();
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.manage().timeouts().implicitlyWait(10000);
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get(protractor_1.browser.params.env);
        yield header.clickLogin();
    }));
    it('To verify that user can sign in successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        yield signin.enterEmail(testData.login.email);
        // await attachScreenshot('Enter email');
        yield signin.enterPassword(testData.login.password);
        yield signin.clickSignIn();
        yield cmn.validateToast(testData.login.welcome_message);
    }));
    it("To verify tha user can signout successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        yield header.signOutIsDisplay();
        yield header.clickSignOut();
    }));
    it("To verify that login fails", () => __awaiter(void 0, void 0, void 0, function* () {
        yield signin.enterEmail(testData.login.email);
        yield signin.enterPassword(testData.login.wrong_password);
        yield signin.clickSignIn();
        yield cmn.validateToast(testData.login.invalid_password);
    }));
    it("To verify that login fails", () => __awaiter(void 0, void 0, void 0, function* () {
        yield signin.enterEmail("koushik@let");
        yield signin.enterPassword(testData.login.password);
        yield signin.clickSignIn();
        yield cmn.validateToast(testData.login.invalid_email);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0Q29kZVNpZ25JbnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjZmlsZXMvbGV0Q29kZVNpZ25JbnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9DO0FBQ3BDLHNEQUFtRDtBQUNuRCx3RUFBcUU7QUFDckUsc0VBQW1FO0FBQ25FLG9FQUFzRDtBQUV0RCxRQUFRLENBQUMsK0NBQStDLEVBQUUsR0FBUSxFQUFFO0lBQ2hFLElBQUksTUFBTSxHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztJQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7SUFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztJQUV2QixTQUFTLENBQUMsR0FBUyxFQUFFO1FBQ2pCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUMxQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixVQUFVLENBQUMsR0FBUyxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckMsTUFBTSxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVKLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRSxHQUFRLEVBQUU7UUFDM0QsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MseUNBQXlDO1FBQ3pDLE1BQU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzFCLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkNBQTZDLEVBQUUsR0FBTyxFQUFFO1FBQ3pELE1BQU0sTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDL0IsTUFBTSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7UUFDMUMsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0MsTUFBTSxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDekQsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDMUIsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRCQUE0QixFQUFFLEdBQVMsRUFBRTtRQUN4QyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDdEMsTUFBTSxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbkQsTUFBTSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDMUIsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDekQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==