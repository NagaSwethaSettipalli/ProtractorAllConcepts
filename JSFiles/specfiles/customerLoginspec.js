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
const bankingAppHomePage_1 = require("../pageObjects/bankingAppHomePage");
describe('Banking application testing', () => {
    //Angular website tests
    it('should validate customer login functionlity', () => __awaiter(void 0, void 0, void 0, function* () {
        let bank = new bankingAppHomePage_1.bankingAppHomePage();
        yield protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        //repeater ,  chain locators, And css for identical tags
    }));
    //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJMb2dpbnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjZmlsZXMvY3VzdG9tZXJMb2dpbnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0Q7QUFJcEQsMEVBQXVFO0FBR3ZFLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUU7SUFFekMsdUJBQXVCO0lBRXZCLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxHQUFTLEVBQUU7UUFFekQsSUFBSSxJQUFJLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQztRQUN4Rix3REFBd0Q7SUFNeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUdGLGdGQUFnRjtBQUVwRixDQUFDLENBQUMsQ0FBQSJ9