import { browser, ElementFinder } from "protractor";
import { element, by } from "protractor";
import { async } from "q";
import { formatDiagnostic } from "typescript";
import { bankingAppHomePage } from "../pageObjects/bankingAppHomePage";
import {select} from "../utils/select";

describe('Banking application testing', () => {

    //Angular website tests

    it('should validate customer login functionlity', async () => {

        let bank = new bankingAppHomePage();
        await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        //repeater ,  chain locators, And css for identical tags
       
        
        

       
        })


        //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();

    })


    
