import { LitElement } from 'lit';
import { EventBus } from '@openscd/open-scd-core';
export default class OscdSubstationEditor extends LitElement {
    doc?: Document;
    eventBus: EventBus;
    protected handleClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
