import { protractor } from "protractor/built/ptor";
import {browser,by ,ElementFinder} from "protractor";

export class select {

    //Create a global variable called dropdown of ElementFinder type
    dropdown:ElementFinder;

   // Create a constructor for the select class, which accepts a parameter of ElementFinder type.
    constructor(dropdownElement:ElementFinder) {
        //Assign the received element to the global variable dropdown.
        this.dropdown = dropdownElement;
        //Click the element received in the constructor.
        dropdownElement.click();
        browser.sleep(1000)
    }
//different methods to select values from dropdown
//selectByIndex(index:number) method
//Create a method called selectByIndex(), and it should accept a number parameter
    public selectByIndex(index:number){
        //We have to add 1 with the received index even though select option starts with 0; 
        //we cannot find elements with 0 index in XPath and CSS selector.
        // what I mean is Xpath's and CSS selector's index starts with 1
        index = index + 1;
        console.log("Selecting element based index : "+index)
         //Now try to find the inner element of an element as we learned before starting the Select class.
        //Click the inner element.
        // select the option
        this.dropdown.element(by.css("option:nth-child("+index+")")).click()
        //if you want to use xpath instead of css 
        //this.dropdown.element(by.xpath("//option["+index+"]")).click()

    }
    //select by value method
    public selectByValue(value:string){
        console.log("Selecting element based value  : "+value)
        // select the option
        this.dropdown.element(by.css("option[value='"+value+"']")).click()
    }
    //selcct by visibletext
    public selectByVisibleText(visibleText:string){
        console.log("Selecting element based text  : "+visibleText)
        // select the option
        this.dropdown.element(by.xpath("//option[text()='"+visibleText+"']")).click()
    }
    //getOptions will return all the options present in the dropdown
    public getOptions(visibleText:string){
        console.log("returning all options  : "+visibleText)
        // return all the options
        this.dropdown.all(by.css("option"))
    }
    //isMultiple method gives information about the dropdown, 
    //whether it is a single value dropdown or multiple value dropdown.
    public  isMultiple(visibleText:string){
        console.log("returning all options  : "+visibleText)
        // select the option
        this.dropdown.getAttribute("multiple").then(function(multipleOrNot){
            if(multipleOrNot){
                return true
            }else{
                return false;
            }
        })
    }
    
}