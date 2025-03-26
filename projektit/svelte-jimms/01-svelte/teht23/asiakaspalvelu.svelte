<script>
    import Ajat from '../teht12/auki.svelte'
    import Paiva from '../teht12/paivat.svelte'
    import Osio from '../teht21/alapalkin-osio.svelte'
    import Yhteystiedot from '../teht15/yhteystieto.svelte'
    
</script>

<Osio otsikko='ASIAKASPALVELU'>
    <div class='aukiolo'>
    <Paiva aika='Ma-Su'/>
    <Ajat/>
    </div>
    <div class='yhteys'>
        <Yhteystiedot tyyppi='puhelin', teksti='+358 29 70 70700'/>
        <Yhteystiedot tyyppi='sähköposti', teksti='asiakaspalvelu@jimms.fi'/>
    </div>
</Osio>

<style>
    .aukiolo{
        display:flex;
        margin-bottom:15px;
    }
</style>