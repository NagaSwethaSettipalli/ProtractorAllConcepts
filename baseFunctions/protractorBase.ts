import { browser,by, ElementFinder, ProtractorExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";

export class ProtractorBase {

    private ec: ProtractorExpectedConditions = browser.ExpectedConditions;
    private timeOut = 10000;
    dropdown:ElementFinder;


    /**
     * @description This function is used to do the click action
     * @param element - The element on whick click action to be performed
     */

    public async click(element: ElementFinder) {
        await browser.wait(this.ec.elementToBeClickable(element), this.timeOut,
            "Failed to click the element");
        await element.click();
    }
    /**
     * @description This function will append the text
     * @param element Pass the element locator
     * @param testData Data to be typed on the element
     */
    public async type(element: ElementFinder, testData: string) {
        await this.visibilityOf(element);
        await element.sendKeys(testData);
    }


    /**
    * @description This function will clear the existing value and then type the data
    * @param element Pass the element locator
    * @param testData Data to be typed on the element
    */

    public async clearAndType(element: ElementFinder, testData: string) {
        await this.visibilityOf(element);
        await element.clear()
        await element.sendKeys(testData);
    }

    public async assertText(element: ElementFinder, expectedText: string) {
        await this.visibilityOf(element);
        let actualText = await element.getText();
        expect(actualText.trim()).toBe(expectedText);
    }

    private async visibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.visibilityOf(element), this.timeOut,
            "Element is not visible");
    }

    protected async inVisibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.invisibilityOf(element), this.timeOut,
            "Element is still visible");
    }
    public async assertTrue(element: ElementFinder) {
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(true);
    }

    public async assertFalse(element: ElementFinder) {
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(false);
    }

    public async acceptAlert() {
        await browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
        await (await browser.switchTo().alert()).accept();
    }

    public async dismissAlert() {
        await this.waitForAlert();
        await (await browser.switchTo().alert()).dismiss();
    }

    private async waitForAlert() {
        await browser.wait(this.ec.alertIsPresent(), this.timeOut, "Alert is not present");
    }

    public async tyepInAlert(data: string) {
        await this.waitForAlert();
        await (await browser.switchTo().alert()).sendKeys(data);
    }
    public async getTextFromAlert(): Promise<string> {
        await this.waitForAlert();
        let alertText = await (await browser.switchTo().alert()).getText();
        return alertText;
    }

    public async switchToFrame(frameNumber: number) {
        await browser.switchTo().frame(frameNumber);
    }


    public async typeAndTab(element: ElementFinder, testData: string) {
        await this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(testData, protractor.Key.TAB)
    }

    public async typeAndEnter(element: ElementFinder, testData: string) {
        let capabilities = await browser.getCapabilities()
        let platform = capabilities.get('platform');
        await this.visibilityOf(element);
        await element.clear();
        if (platform === "Mac OS X") {
            await element.sendKeys(testData, protractor.Key.RETURN)
        } else {
            await element.sendKeys(testData, protractor.Key.ENTER)
        }
    }

    public async mouseHoverAndClick(element: ElementFinder) {
        await browser.actions()
            .mouseMove(await element.getWebElement())
            .click()
            .perform();

    }
    public async moveToElement(element: ElementFinder) {
        await browser.actions()
            .mouseMove(await element.getWebElement())
            .perform();
    }

//dropdowns
public async selectByValue(value:string){
    console.log("Selecting element based value  : "+value)
    // select the option
    this.dropdown.element(by.css("option[value='"+value+"']")).click()
}
public selectByIndex(index:number){
    index = index + 1;
    console.log("Selecting element based index : "+index)
    this.dropdown.element(by.css("option:nth-child("+index+")")).click()
    //if you want to use xpath instead of css 
    //this.dropdown.element(by.xpath("//option["+index+"]")).click()
}
 //selcct by visibletext
 public selectByVisibleText(visibleText:string){
    console.log("Selecting element based text  : "+visibleText)
    this.dropdown.element(by.xpath("//option[text()='"+visibleText+"']")).click()
}
//getOptions will return all the options present in the dropdown
public getOptions(visibleText:string){
    console.log("returning all options  : "+visibleText)
    this.dropdown.all(by.css("option"))
}
//isMultiple method gives information about the dropdown, 
//whether it is a single value dropdown or multiple value dropdown.
public  isMultiple(visibleText:string){
    console.log("returning all options  : "+visibleText)
    this.dropdown.getAttribute("multiple").then(function(multipleOrNot){
        if(multipleOrNot){
            return true
        }else{
            return false;
        }
    })
}
}