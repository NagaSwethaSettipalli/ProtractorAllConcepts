import { ProtractorBase } from "../baseFunctions/ProtractorBase";
import { $, browser } from "protractor";


export class common extends ProtractorBase {

    private toast = $("div.toast-message")

    async validateToast(message: string) {
        await this.assertTrue(this.toast)
        await this.assertText(this.toast, message);
        await this.inVisibilityOf(this.toast);
}
}