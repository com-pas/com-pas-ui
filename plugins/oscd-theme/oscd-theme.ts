/* eslint-disable class-methods-use-this */
import { html, LitElement } from 'lit';
import { property, queryAll } from 'lit/decorators.js';
import { EventBus } from '@openscd/open-scd-core';

import '@material/mwc-textfield';
import '@material/mwc-button';

import { TextField } from '@material/mwc-textfield';

export default class OscdTheme extends LitElement {
  @property({
    type: Document,
  })
  doc?: Document;

  @property({
    type: Object,
  })
  eventBus!: EventBus;

  @queryAll('mwc-textfield')
  textFields!: TextField[];

  protected handleClick() {
    const css: { [key: string]: string } = {};

    this.textFields.forEach(textField => {
      const { name, value } = textField;
      css[name] = value;
    });

    localStorage.setItem('oscd-theme', JSON.stringify(css));

    this.eventBus.dispatchEvent(new Event('oscd-theme'));
  }

  private getValue(cssProp: string): string {
    return (
      JSON.parse(localStorage.getItem(`oscd-theme`) || '{}')[cssProp] || ''
    );
  }

  render() {
    return html`
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
