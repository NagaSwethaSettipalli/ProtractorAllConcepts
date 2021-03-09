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
exports.ProtractorBase = void 0;
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
class ProtractorBase {
    constructor() {
        this.ec = protractor_1.browser.ExpectedConditions;
        this.timeOut = 10000;
    }
    /**
     * @description This function is used to do the click action
     * @param element - The element on whick click action to be performed
     */
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.elementToBeClickable(element), this.timeOut, "Failed to click the element");
            yield element.click();
        });
    }
    /**
     * @description This function will append the text
     * @param element Pass the element locator
     * @param testData Data to be typed on the element
     */
    type(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.sendKeys(testData);
        });
    }
    /**
    * @description This function will clear the existing value and then type the data
    * @param element Pass the element locator
    * @param testData Data to be typed on the element
    */
    clearAndType(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.clear();
            yield element.sendKeys(testData);
        });
    }
    assertText(element, expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            let actualText = yield element.getText();
            expect(actualText.trim()).toBe(expectedText);
        });
    }
    visibilityOf(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeOut, "Element is not visible");
        });
    }
    inVisibilityOf(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.invisibilityOf(element), this.timeOut, "Element is still visible");
        });
    }
    assertTrue(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            expect(yield element.isDisplayed()).toBe(true);
        });
    }
    assertFalse(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            expect(yield element.isDisplayed()).toBe(false);
        });
    }
    acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
            yield (yield protractor_1.browser.switchTo().alert()).accept();
        });
    }
    dismissAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            yield (yield protractor_1.browser.switchTo().alert()).dismiss();
        });
    }
    waitForAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
        });
    }
    tyepInAlert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            yield (yield protractor_1.browser.switchTo().alert()).sendKeys(data);
        });
    }
    getTextFromAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            let alertText = yield (yield protractor_1.browser.switchTo().alert()).getText();
            return alertText;
        });
    }
    switchToFrame(frameNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(frameNumber);
        });
    }
    typeAndTab(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.clear();
            yield element.sendKeys(testData, ptor_1.protractor.Key.TAB);
        });
    }
    typeAndEnter(element, testData) {
        return __awaiter(this, void 0, void 0, function* () {
            let capabilities = yield protractor_1.browser.getCapabilities();
            let platform = capabilities.get('platform');
            yield this.visibilityOf(element);
            yield element.clear();
            if (platform === "Mac OS X") {
                yield element.sendKeys(testData, ptor_1.protractor.Key.RETURN);
            }
            else {
                yield element.sendKeys(testData, ptor_1.protractor.Key.ENTER);
            }
        });
    }
    mouseHoverAndClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions()
                .mouseMove(yield element.getWebElement())
                .click()
                .perform();
        });
    }
    moveToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions()
                .mouseMove(yield element.getWebElement())
                .perform();
        });
    }
    //dropdowns
    selectByValue(value) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Selecting element based value  : " + value);
            // select the option
            this.dropdown.element(protractor_1.by.css("option[value='" + value + "']")).click();
        });
    }
    selectByIndex(index) {
        index = index + 1;
        console.log("Selecting element based index : " + index);
        this.dropdown.element(protractor_1.by.css("option:nth-child(" + index + ")")).click();
        //if you want to use xpath instead of css 
        //this.dropdown.element(by.xpath("//option["+index+"]")).click()
    }
    //selcct by visibletext
    selectByVisibleText(visibleText) {
        console.log("Selecting element based text  : " + visibleText);
        this.dropdown.element(protractor_1.by.xpath("//option[text()='" + visibleText + "']")).click();
    }
    //getOptions will return all the options present in the dropdown
    getOptions(visibleText) {
        console.log("returning all options  : " + visibleText);
        this.dropdown.all(protractor_1.by.css("option"));
    }
    //isMultiple method gives information about the dropdown, 
    //whether it is a single value dropdown or multiple value dropdown.
    isMultiple(visibleText) {
        console.log("returning all options  : " + visibleText);
        this.dropdown.getAttribute("multiple").then(function (multipleOrNot) {
            if (multipleOrNot) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.ProtractorBase = ProtractorBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3RvckJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9iYXNlRnVuY3Rpb25zL3Byb3RyYWN0b3JCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxRjtBQUNyRixnREFBbUQ7QUFFbkQsTUFBYSxjQUFjO0lBQTNCO1FBRVksT0FBRSxHQUFpQyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO1FBQzlELFlBQU8sR0FBRyxLQUFLLENBQUM7SUE2SjVCLENBQUM7SUF6Skc7OztPQUdHO0lBRVUsS0FBSyxDQUFDLE9BQXNCOztZQUNyQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFDbEUsNkJBQTZCLENBQUMsQ0FBQztZQUNuQyxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFDRDs7OztPQUlHO0lBQ1UsSUFBSSxDQUFDLE9BQXNCLEVBQUUsUUFBZ0I7O1lBQ3RELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBR0Q7Ozs7TUFJRTtJQUVXLFlBQVksQ0FBQyxPQUFzQixFQUFFLFFBQWdCOztZQUM5RCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDckIsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxPQUFzQixFQUFFLFlBQW9COztZQUNoRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMs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