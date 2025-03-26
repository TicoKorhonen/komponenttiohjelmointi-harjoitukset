<script>
    import Ajat from '../teht12/aukioloaika.svelte'
    import Paiva from '../teht12/paivat.svelte'
    import Osio from '../teht21/alapalkin-osio.svelte'
    import AlapalkinSarake from '../teht22/alapalkin-sarake.svelte'
</script>

<AlapalkinSarake>
<Osio otsikko='MYYMÄLÄ TURKU'>
    <div style='display:flex;'>
        <Paiva aika='Ma-Pe'/>
        <Ajat auki={[{aukeaa:'11:00', sulkeutuu:'19:00'}]}/>
    </div>
    <div style='display:flex;'>
        <Paiva aika='La'/>
        <Ajat auki={[{aukeaa:'10:00', sulkeutuu:'16:00'}]}/>
    </div>
    <p class='maksuInfo'>Maksuvälineenä käyvät yleisimmät pankki- ja luottokortit sekä mobiilimaksutavat. Ei käteismaksumahdollisuutta.</p>
    <div class='osoite'>
        <div>
            <img src='src/harjotukset/sijainti.png' style='width:25px; height:25px; margin-right:7px;'>
        </div>
        <a href='#'>
            <p>Lukkosepänkatu 7</p>
            <p>20320 Turku</p>
        </a>
    </div>
</Osio>

<style>
    .osoite{
        display:flex;        
    }
    p{
        margin:0;
    }

    .maksuInfo{
        margin-top:18px;
        margin-bottom:18px;
    }
</style>
</AlapalkinSarake>