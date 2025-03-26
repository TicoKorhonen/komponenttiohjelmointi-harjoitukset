<script>
    import Yhteisot from '../teht14/yhteisot.svelte'
    import Osio from '../teht21/alapalkin-osio.svelte'
    import YlapalkinSarake from '../teht22/alapalkin-sarake.svelte'
</script>

<YlapalkinSarake>
    <Osio otsikko='YHTEISÖT'>
        <Yhteisot {...[
            {nimi:'facebook'},
            {nimi:'instagram'},
            {nimi:'twitter'},
            {nimi:'youtube'},
            {nimi:'tiktok'},
            {nimi:'linkedin'}
            ]}>

        </Yhteisot>
    </Osio>
</YlapalkinSarake>