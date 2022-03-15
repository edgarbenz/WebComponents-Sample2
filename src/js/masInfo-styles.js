export const plantillaStyles = `
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
`;