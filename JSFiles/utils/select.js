"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = void 0;
const protractor_1 = require("protractor");
class select {
    // Create a constructor for the select class, which accepts a parameter of ElementFinder type.
    constructor(dropdownElement) {
        //Assign the received element to the global variable dropdown.
        this.dropdown = dropdownElement;
        //Click the element received in the constructor.
        dropdownElement.click();
        protractor_1.browser.sleep(1000);
    }
    //different methods to select values from dropdown
    //selectByIndex(index:number) method
    //Create a method called selectByIndex(), and it should accept a number parameter
    selectByIndex(index) {
        //We have to add 1 with the received index even though select option starts with 0; 
        //we cannot find elements with 0 index in XPath and CSS selector.
        // what I mean is Xpath's and CSS selector's index starts with 1
        index = index + 1;
        console.log("Selecting element based index : " + index);
        //Now try to find the inner element of an element as we learned before starting the Select class.
        //Click the inner element.
        // select the option
        this.dropdown.element(protractor_1.by.css("option:nth-child(" + index + ")")).click();
        //if you want to use xpath instead of css 
        //this.dropdown.element(by.xpath("//option["+index+"]")).click()
    }
    //select by value method
    selectByValue(value) {
        console.log("Selecting element based value  : " + value);
        // select the option
        this.dropdown.element(protractor_1.by.css("option[value='" + value + "']")).click();
    }
    //selcct by visibletext
    selectByVisibleText(visibleText) {
        console.log("Selecting element based text  : " + visibleText);
        // select the option
        this.dropdown.element(protractor_1.by.xpath("//option[text()='" + visibleText + "']")).click();
    }
    //getOptions will return all the options present in the dropdown
    getOptions(visibleText) {
        console.log("returning all options  : " + visibleText);
        // return all the options
        this.dropdown.all(protractor_1.by.css("option"));
    }
    //isMultiple method gives information about the dropdown, 
    //whether it is a single value dropdown or multiple value dropdown.
    isMultiple(visibleText) {
        console.log("returning all options  : " + visibleText);
        // select the option
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
exports.select = select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbHMvc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJDQUFxRDtBQUVyRCxNQUFhLE1BQU07SUFLaEIsOEZBQThGO0lBQzdGLFlBQVksZUFBNkI7UUFDckMsOERBQThEO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLGdEQUFnRDtRQUNoRCxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUNMLGtEQUFrRDtJQUNsRCxvQ0FBb0M7SUFDcEMsaUZBQWlGO0lBQ3RFLGFBQWEsQ0FBQyxLQUFZO1FBQzdCLG9GQUFvRjtRQUNwRixpRUFBaUU7UUFDakUsZ0VBQWdFO1FBQ2hFLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEQsaUdBQWlHO1FBQ2xHLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNwRSwwQ0FBMEM7UUFDMUMsZ0VBQWdFO0lBRXBFLENBQUM7SUFDRCx3QkFBd0I7SUFDakIsYUFBYSxDQUFDLEtBQVk7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0RCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN0RSxDQUFDO0lBQ0QsdUJBQXVCO0lBQ2hCLG1CQUFtQixDQUFDLFdBQWtCO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUMsV0FBVyxDQUFDLENBQUE7UUFDM0Qsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDakYsQ0FBQztJQUNELGdFQUFnRTtJQUN6RCxVQUFVLENBQUMsV0FBa0I7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNwRCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFDRCwwREFBMEQ7SUFDMUQsbUVBQW1FO0lBQzNELFVBQVUsQ0FBQyxXQUFrQjtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3BELG9CQUFvQjtRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxhQUFhO1lBQzlELElBQUcsYUFBYSxFQUFDO2dCQUNiLE9BQU8sSUFBSSxDQUFBO2FBQ2Q7aUJBQUk7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FFSjtBQTlERCx3QkE4REMifQ==