import { __decorate } from "tslib";
/* eslint-disable class-methods-use-this */
import { html, LitElement } from 'lit';
import { property, queryAll } from 'lit/decorators.js';
import '@material/mwc-textfield';
import '@material/mwc-button';
export default class OscdTheme extends LitElement {
    handleClick() {
        const css = {};
        this.textFields.forEach(textField => {
            const { name, value } = textField;
            css[name] = value;
        });
        localStorage.setItem('oscd-theme', JSON.stringify(css));
        this.eventBus.dispatchEvent(new Event('oscd-theme'));
    }
    getValue(cssProp) {
        return (JSON.parse(localStorage.getItem(`oscd-theme`) || '{}')[cssProp] || '');
    }
    render() {
        return html `
      <div>
        <h1>Theming</h1>
        <mwc-textfield
          label="Primary color"
          name="oscd-theme-primary"
          .value=${this.getValue('oscd-theme-primary')}
        ></mwc-textfield>
        <mwc-textfield
          label="Primary color"
          name="oscd-theme-app-bar-primary"
          .value=${this.getValue('oscd-theme-app-bar-primary')}
        ></mwc-textfield>

        <mwc-button @click=${this.handleClick}>Save</mwc-button>
      </div>
    `;
    }
}
__decorate([
    property({
        type: Document,
    })
], OscdTheme.prototype, "doc", void 0);
__decorate([
    property({
        type: Object,
    })
], OscdTheme.prototype, "eventBus", void 0);
__decorate([
    queryAll('mwc-textfield')
], OscdTheme.prototype, "textFields", void 0);
//# sourceMappingURL=oscd-theme.js.map