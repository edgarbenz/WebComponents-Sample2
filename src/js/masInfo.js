import { plantillaStyles } from './masInfo-styles.js';
import { plantillaHtml } from './masInfo-html.js';

class MasInfo extends HTMLElement {
    template = plantillaStyles + plantillaHtml;

    constructor() {
        super();
        this.attachShadow({ mode:'open' });
        this.shadowRoot.innerHTML = this.template;
    }
}

if (!customElements.get('edgar-info')) {
    customElements.define('edgar-info', MasInfo);
}