export class Atributos extends HTMLElement {
    constructor() {
        super();
            //this.constructor means that observedAttributes is an static method , these methods dont need be instanced , we can invoke it that way: object.method, in this case: this.constructor.method, 
            //this.constructor is used because  we are inside constructor and in this point we hadnt instanced a object, lo que venga sea lo que sea y tenga el metodo observedAttributes, haz esto y ya
            //
        if (this.constructor.atributosObservados) {
            console.log('this.constructor.observedAttributes = ',this.constructor.atributosObservados);
            this.constructor.atributosObservados.forEach(atributo => {
                Object.defineProperty(this, atributo, { //to each new tag , It will check the gets or sets in the template and put them in each attribute = value of this new tag
                    get () {
                        console.log('get ',atributo, this.getAttribute(atributo));
                        return this.getAttribute(atributo);
                    },
                    set (value) {
                        console.log('set ',atributo);
                        this.setAttribute(atributo,value);
                    }
                });
            });
        } else {
            console.log('No se detectaron atributos')
        }
    }
}