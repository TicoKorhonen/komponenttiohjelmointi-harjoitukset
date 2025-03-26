<script>
    let { url } = $props();
</script>

<style>
    a{
        text-decoration: none;
        color:white;
    }

    .ostoskori{
        display:flex;
        font-size: var(--fontti-koko-leipäteksti-ylärivi)
    }

    .ostoskori:hover{
        background-color: var(--väri-ensisijainen);
    }

    .ostoskori:hover .valkoinen__kori{
        display:none;
    }

</style>

<div class='ostoskori'>
    <a class='aad' style='display:flex; min-width:45px; min-height:45px; align-items:center; justify-content:center; border: solid 1px white;' href={url}>
        <img class='valkoinen__kori' style='position:absolute; :25px; height:25px;' src='src/harjotukset/cart.png'>
        <img style='width:25px; height:25px;' src='src/harjotukset/cart-musta.png'>
    </a>
</div>
