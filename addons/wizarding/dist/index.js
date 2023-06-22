import { render, html } from "lit";
import "@material/mwc-dialog";
const wizarding = (host) => {
    host.eventBus.addEventListener("wizarding", () => {
        const element = html `<mwc-dialog open>Wizard dialog</mwc-dialog>`;
        const root = document.createElement("div");
        const appContent = host.shadowRoot.querySelector('[slot="appContent"]');
        console.log(appContent);
        appContent.appendChild(root);
        render(element, root);
    });
};
export default wizarding;
//# sourceMappingURL=index.js.map