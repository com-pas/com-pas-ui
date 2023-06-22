import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export default class OscdSubstationEditor extends LitElement {
    handleClick() {
        this.eventBus.dispatchEvent(new Event('wizarding', { bubbles: true }));
    }
    render() {
        return html `
      <div>
        <h1>Substation Editor</h1>
        <button @click=${this.handleClick}>Validate</button>
      </div>
    `;
    }
}
__decorate([
    property({
        type: Document,
    })
], OscdSubstationEditor.prototype, "doc", void 0);
__decorate([
    property({
        type: Object,
    })
], OscdSubstationEditor.prototype, "eventBus", void 0);
//# sourceMappingURL=oscd-substation-editor.js.map