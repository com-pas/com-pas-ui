import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { EventBus } from '@openscd/open-scd-core';

export default class OscdSubstationEditor extends LitElement {
  @property({
    type: Document,
  })
  doc?: Document;

  @property({
    type: Object,
  })
  eventBus!: EventBus;

  protected handleClick() {
    this.eventBus.dispatchEvent(new Event('wizarding', { bubbles: true }));
  }

  render() {
    return html`
      <div>
        <h1>Substation Editor</h1>
        <button @click=${this.handleClick}>Validate</button>
      </div>
    `;
  }
}
