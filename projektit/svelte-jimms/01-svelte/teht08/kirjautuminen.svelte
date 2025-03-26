<script>
    let { url } = $props(); 
</script>

<style>
    a{
        text-decoration: none;
        color:white;
    }

    .kirjautuminen{
        display:flex;
        align-items:center;
        width:195px;
        margin-right:25px;
        margin-left:20px;
        font-size: var(--fontti-koko-leipäteksti-ylärivi)
    }

    .kirjautuminen:hover{
        background-color:white;
    }
    
    .kirjautuminen:hover .henkilo-valkoinen{
        display:none;
    }


</style>

<a href={url} class='kirjautuminen' >
    <div style='display:flex; justify-content:center; align-content:center; height:40px; width:40px;'>
        <img class='henkilo-valkoinen' style='position:absolute; width:35px; height:32px;' src='src/harjotukset/henkilo.png'>
        <img class='henkilo-musta' style='width:35px; height:32px;' src='src/harjotukset/henkilo-musta.png'>
    </div>
    <p class='kirjaudu__teksti' style='margin-left:5px;font-size:11.8px;'>Kirjaudu / Luo tili</p>
</a>

