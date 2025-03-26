<script>
    import IkoniJaTeksti from "../teht13/ikoni-ja-teksti.svelte";
    let {tyyppi, teksti} = $props();
</script>

{#if tyyppi == 'puhelin'}
<IkoniJaTeksti {...{kuva:"src/harjotukset/phone.png", teksti: teksti}}/>
{:else if tyyppi == 'sähköposti'}
<IkoniJaTeksti {...{kuva:"src/harjotukset/email.png", teksti: teksti}}/>
{:else if tyyppi == 'osoite'}
<IkoniJaTeksti {...{kuva:"src/harjotukset/address.png", teksti: teksti}}/>
{:else}
<IkoniJaTeksti {...{kuva:"#", teksti: teksti}}/>
{/if}
