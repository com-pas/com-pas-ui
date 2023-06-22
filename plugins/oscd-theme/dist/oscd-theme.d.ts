import { LitElement } from 'lit';
import { EventBus } from '@openscd/open-scd-core';
import '@material/mwc-textfield';
import '@material/mwc-button';
import { TextField } from '@material/mwc-textfield';
export default class OscdTheme extends LitElement {
    doc?: Document;
    eventBus: EventBus;
    textFields: TextField[];
    protected handleClick(): void;
    private getValue;
    render(): import("lit-html").TemplateResult<1>;
}
