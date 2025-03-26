<script>
    import Hakusivu from '../teht36/hakusivu.svelte';
    import {getContext} from 'svelte';
    let value = getContext('hakusana');
</script>

{#if value.sisältö == ''}
<div class='sivukokonaisuus' style='display:flex; align-items:center; font-size:17px;'>
    <div class='kuvat'>
        <div class='pääkuva'>
            <img style='width:100%;' src='src/harjotukset/pc1.jpg'>
        </div>
        <div class='pienetkuvat'>
            <img class='pienikuva' style='width:calc(100% / 4.3)' src='src/harjotukset/pc2.jpg'>
            <img class='pienikuva' style='width:calc(100% / 4.3)' src='src/harjotukset/pc3.jpg'>
            <img class='pienikuva' style='width:calc(100% / 4.3)' src='src/harjotukset/pc4.jpg'>
            <img class='pienikuva' style='width:calc(100% / 4.3)' src='src/harjotukset/pc5.jpg'>
        </div>
    </div>
</div>
{:else if value.sisältö != ''}
<Hakusivu hakusana={value.sisältö}/>
{/if}

<style>

    .sivukokonaisuus{
        width:100%;
        background-color: white;
    }

    .kuvat{
        width:100%;
        padding-left:var(--väli-100);
        padding-right:var(--väli-100);
        margin-top:10px;
        margin-bottom:10px;
    }

    .pienetkuvat{
        margin-top:20px;
        display:flex;
        justify-content: space-between;
    }

</style>