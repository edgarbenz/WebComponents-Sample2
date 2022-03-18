export function plantillaHtml (tag) {
    return `
    <article class="pelicula peli${tag.num}">
    <div class="masinfo">
        <span style="color:rgba(141, 125, 34, 0.664)">*****</span>
        <h3 style="text-align: center;">${tag.movie}</h3>
            Año: ${tag.year}
            ${tag.score}  <br>
            
            <br>
            Sinopsis:<br>
            <slot></slot>
    </div>
    </article>
`};