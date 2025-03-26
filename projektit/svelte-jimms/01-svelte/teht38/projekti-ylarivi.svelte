
<div style='background-color:white; color:black; padding-top:1px;'>
    <div>
    <h2 style='display:flex; justify-content:center;'>portfolio: jimms.fi -etusivu kopio</h2>
    <div>
        <p style='display:flex; justify-content:center; margin:0;'>Sivu josta kyseinen kopio on tehty: <a style='text-decoration:underline; color:blue; margin-left:5px;' href='https://jimms.fi'>jimms.fi</a></p>
    </div>
    <div style='display:flex; justify-content:center;'>
        <a href='https://github.com/TicoKorhonen' style='text-decoration:underline; color:blue; margin-right:10px; margin:10px;'>Oma profiili</a>
        <a href='https://github.com/TVTPT2304/web-ohjelmointi-1-TicoKorhonen' style='text-decoration:underline; color:blue; margin:10px;'> Repositorio</a>
    </div>
    </div>
    <div class='dropdown'>
        <button>
            <div class='burgeri'></div>
            <div class='burgeri'></div>
            <div class='burgeri'></div>
        </button>
        <div class='dropdown__sisältö'>
            <p>Saavutettavissa: Ei toteutettu</p>
            <p>Ajakohta: Helmikuu 2025</p>
            <p>Käytetyt työkalut: html, css, js. (svelte)</p>
            <p>Sivun tarkoituksena oli harjoitella svelteä ja storybookin käyttöä</p>
            <p>Sivun iconit: <a style='text-decoration:underline; color:blue;' href='https://fonts.google.com/icons'>google fonts</a></p>
            <p>Sivulla ei ole käytetty jimm's:in kuvia tai logoa, vaan kuvat on toteutettu muutoin: esimerkiksi palkintokuvat on toteutettu placeholder-elementillä html:llä</p>
        </div>
    </div>
</div>

<style>
    
    .burgeri{
        border-radius: 5px;
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 7px;
    }

    .dropdown{
        position:absolute;
        display:inline-block;
        top:0;
        height:40px;
        width:40px;
    }
    .dropdown__sisältö{
        display:none;
        position:absolute;
        background-color: rgb(255, 255, 255);
        min-width:90vw;
        min-height:100px;
        top:129px;

    }
    button{
        padding:0;
        width:40px;
        height:40px;
        border:0;
        margin:0;
        background-color:var(--väri-tausta)
    }

    button:hover{
        background-color: rgb(200, 200, 200);
    }

    .dropdown:hover .dropdown__sisältö{
        display:block;
    }
</style>