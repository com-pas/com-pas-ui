/* eslint-disable class-methods-use-this */
import { html, LitElement } from 'lit';
export default class OscdSubstationEditor extends LitElement {
    foo() {
        console.log(this, 'Foo');
    }
    renderFoot() {
        return html `<footer>Footer</footer>`;
    }
    render() {
        return html `<div>Substation editor${this.renderFoot()}</div>`;
    }
}
//# sourceMappingURL=oscd-substation-editor.js.map