"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerLoginPage = void 0;
const protractor_1 = require("protractor");
class customerLoginPage {
    constructor() {
        this.yourNameDropdown = protractor_1.element(protractor_1.by.className("form-group"));
        this.nameDropdownList = protractor_1.element.all(protractor_1.by.css("#userSelect option"));
    }
}
exports.customerLoginPage = customerLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJMb2dpblBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9jdXN0b21lckxvZ2luUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUU7QUFFekUsTUFBYSxpQkFBaUI7SUFLOUI7UUFFSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBRXBFLENBQUM7Q0FFQTtBQVpELDhDQVlDIn0=