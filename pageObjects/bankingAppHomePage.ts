import { ElementFinder,element,by } from "protractor";

export class bankingAppHomePage
{
    Homebutton:ElementFinder;
    CustomerLogin:ElementFinder;
    BankManagerLogin:ElementFinder;

constructor()
{
    this.Homebutton=element(by.buttonText("Home"));
    this.CustomerLogin=element(by.buttonText("Customer Login"));
    this.BankManagerLogin=element(by.buttonText("Bank Manager Login"));

}





}