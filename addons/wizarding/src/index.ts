import { render, html } from "lit";

import "@material/mwc-dialog";

import { OpenSCD } from "@openscd/open-scd/dist/open-scd.js";

const wizarding = (host: OpenSCD) => {
  host.eventBus.addEventListener("wizarding", () => {
    const element = html`<mwc-dialog open>Wizard dialog</mwc-dialog>`;

    const root: HTMLElement = document.createElement("div");
    const appContent = host.shadowRoot!.querySelector('[slot="appContent"]')!;
    console.log(appContent);
    appContent.appendChild(root);
    render(element, root);
  });
};

export default wizarding;
