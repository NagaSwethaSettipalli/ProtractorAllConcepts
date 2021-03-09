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
exports.common = void 0;
const ProtractorBase_1 = require("../baseFunctions/ProtractorBase");
const protractor_1 = require("protractor");
class common extends ProtractorBase_1.ProtractorBase {
    constructor() {
        super(...arguments);
        this.toast = protractor_1.$("div.toast-message");
    }
    validateToast(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.assertTrue(this.toast);
            yield this.assertText(this.toast, message);
            yield this.inVisibilityOf(this.toast);
        });
    }
}
exports.common = common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29tbW9uRnVuY3Rpb25zL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxvRUFBaUU7QUFDakUsMkNBQXdDO0FBR3hDLE1BQWEsTUFBTyxTQUFRLCtCQUFjO0lBQTFDOztRQUVZLFVBQUssR0FBRyxjQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQU8xQyxDQUFDO0lBTFMsYUFBYSxDQUFDLE9BQWU7O1lBQy9CLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDakMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0MsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7Q0FDQTtBQVRELHdCQVNDIn0=