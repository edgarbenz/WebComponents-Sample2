class MasInfo extends HTMLElement {
    template = `
    <style>
        .pelicula{
            position: relative;
            top: 0px;
            left: 0px;
            --borde-fav:black;
            flex: 1;
            border: 5px solid var(--borde-fav);
            overflow: hidden;
            background-color: tomato;
            min-width: 250px;
            min-height: 200px;
            margin: 8px;
        }
        .pelicula:active{
            --borde-fav:yellow;
        }
        
        /*   .pelicula:hover .imagen-pelicula{
            visibility: hidden;
        }*/
        
        .pelicula:hover .masinfo{
            visibility: visible;
        }
        .masinfo{
            position: absolute;
            top: 0px;
            left: 0px;
            font-size: 0.8rem;
            background-color: black;
            background-size: contain;
            visibility: hidden;
        }
        .imagen-pelicula{
            position: absolute;
            top: 0px;
            left: 0px;
            visibility: visible;
        }
        .peli02:nth-child(2){
            background-image: url("./images/BobEsponjaCapture.JPG");
            background-size: cover;
        }
    </style>
    <article class="pelicula peli02">
        <div class="masinfo">
            <span style="color:rgba(141, 125, 34, 0.664)">*****</span>
            <h3 style="text-align: center;">Apollo 18</h3>
                Año: 2019
                Calificación  <br>
                
                <br>
                Sinopsis:<br>
                A la manera de un falso documental, 'Apollo 18' relata la verdadera 
                historia de la última misión secreta de la NASA a la Luna en diciembre 
                de 1972 y acompaña la peligrosa expedición de dos astronautas norteamericanos.
        </div>
    </article>
    `;

    constructor() {
        super();
        this.attachShadow({ mode:'open' });
        this.shadowRoot.innerHTML = this.template;
    }
}

if (!customElements.get('edgar-info')) {
    customElements.define('edgar-info', MasInfo);
}