import { ElementFinder,ElementArrayFinder,element,by } from "protractor";

export class customerLoginPage
{
    yourNameDropdown:ElementFinder;
    nameDropdownList:ElementArrayFinder ;
   
constructor()
{
    this.yourNameDropdown=element(by.className("form-group"));
    this.nameDropdownList=element.all(by.css("#userSelect option"));

}
    
}





