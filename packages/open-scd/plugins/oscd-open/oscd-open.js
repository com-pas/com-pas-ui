import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { query } from 'lit/decorators.js';
import { newOpenEvent } from '@openscd/open-scd-core';
export default class OscdOpen extends LitElement {
    async run() {
        this.input.click();
    }
    async openDoc(event) {
        var _a, _b;
        const file = (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b.item(0);
        if (!file)
            return;
        const text = await file.text();
        const docName = file.name;
        const doc = new DOMParser().parseFromString(text, 'application/xml');
        this.dispatchEvent(newOpenEvent(doc, docName));
        this.input.onchange = null;
    }
    render() {
        return html `
      <input
        @click=${({ target }) => {
            // eslint-disable-next-line no-param-reassign
            target.value = '';
        }}
        @change=${this.openDoc}
        type="file"
      />
    `;
    }
}
__decorate([
    query('input')
], OscdOpen.prototype, "input", void 0);
//# sourceMappingURL=oscd-open.js.map