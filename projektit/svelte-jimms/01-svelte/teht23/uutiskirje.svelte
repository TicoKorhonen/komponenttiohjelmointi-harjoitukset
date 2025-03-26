<script>
    import Osio from '../teht21/alapalkin-osio.svelte'
    import AlapalkinSarake from '../teht22/alapalkin-sarake.svelte'
</script>

<AlapalkinSarake>
<Osio otsikko='TILAA UUTISKIRJE'>
    <p>Tilaa Jimm'sin uutiskirje ja saat ensimmäisten joukossa tietoa tarjouksista, tapahtumista ja uusista tuotteista.</p>
    <button>TILAA UUTISKIRJE</button>
</Osio>

<style>
    button{
        margin-top:10px;
        height:35px;
        border:0;
        background-color: orange;
        color:var(--väri-ensisijainen);
        font-weight: bold;
    }
</style>
</AlapalkinSarake>