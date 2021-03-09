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
const protractor_1 = require("protractor");
const protractorBase_1 = require("../baseFunctions/protractorBase");
const letCodeHeaderPage_1 = require("../pageObjects/letCodeHeaderPage");
describe('Validating LetCode Header section', () => __awaiter(void 0, void 0, void 0, function* () {
    let hPage = new letCodeHeaderPage_1.letCodeHeaderPage();
    let pbase = new protractorBase_1.ProtractorBase();
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.manage().timeouts().implicitlyWait(10000);
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        //   await browser.get(browser.params.env)
        yield protractor_1.browser.get("http://letcode.in");
    }));
    it('Verify SignUp and Login button are displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        pbase.assertTrue(hPage.signupbutton);
        pbase.assertTrue(hPage.loginbutton);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0Q29kZUhlYWRlclNlY3Rpb25zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY2ZpbGVzL2xldENvZGVIZWFkZXJTZWN0aW9uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFvQztBQUNwQyxvRUFBZ0U7QUFDaEUsd0VBQW9FO0FBR3BFLFFBQVEsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFPLEVBQUU7SUFFbkQsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0lBQ3BDLElBQUksS0FBSyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0lBRWpDLFNBQVMsQ0FBQyxHQUFTLEVBQUU7UUFDakIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLFVBQVUsQ0FBQyxHQUFTLEVBQUU7UUFDckIsMENBQTBDO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUN2QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLDhDQUE4QyxFQUFFLEdBQU8sRUFBRTtRQUN4RCxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV4QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9