import { plantillaStyles } from './masInfo-styles.js';
import { plantillaHtml } from './masInfo-html.js';
import { Atributos } from './attributes.js'

class MasInfo extends Atributos {
//3
    template = `${plantillaStyles(this)}${plantillaHtml(this)}`;
//4
    static get atributosObservados() { //what attributes will be observed
        return ['movie','num','cover','score','year'];  // 
    }  // Here , this function calls 
//1
    constructor() {
        super();
        this.attachShadow({ mode:'open' });
        this.shadowRoot.innerHTML = this.template;
    }
//5
    attributeChangeCallback(attribute, oldValue,newValue) {
        if (oldValue !== newValue) {
            this[attribute] = newValue; //it's the same that this.attribute = newValue;
            this.shadowRoot.innerHTML = this.template; //each change, it will paint the template
        }
    }
/*6
    get num() {
        return this.getAttribute('num');
    }
    set num(value) {
        return this.setAttribute('num',value);
    }
    get movie() {
        return this.getAttribute('movie');
    }
    set movie(title) {
        return this.setAttribute('movie',title);
    }
    get cover() {
        return this.getAttribute('cover');
    }
    set cover(image) {
        return this.setAttribute('cover',image);
    }
    get score() {
        return this.getAttribute('score');
    }
    set score(value) {
        return this.setAttribute('score',value);
    }
    get year() {
        return this.getAttribute('year');
    }
    set year(value) {
        return this.setAttribute('year',value);
    }*/
}

// 2
if (!customElements.get('edgar-info')) {
    customElements.define('edgar-info', MasInfo);
}