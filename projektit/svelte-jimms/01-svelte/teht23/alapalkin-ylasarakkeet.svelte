<script>
    import AsiakaspalveluYritysmyynti from "./asiakaspalvelu-yritysmyynti.svelte";
    import Myymalat from './myymalat.svelte';
    import Yhteisot from './yhteisot.svelte';
    import Uutiskirje from './uutiskirje.svelte';
</script>

<div class='alapalkin-yläsarake'>
    <div class='alapalkin-yläsarake__myynti'>
        <AsiakaspalveluYritysmyynti/>
        <Myymalat/>
    </div>
    <div class='alapalkin-yläsarake__yhteisö'>
        <Yhteisot/>
        <Uutiskirje/>
    </div>
</div>

<style>
    .alapalkin-yläsarake__myynti{
        display:flex;
    }

    .alapalkin-yläsarake__yhteisö{
        display:flex;
    }

    .alapalkin-yläsarake{
        display:flex;
    }
</style>