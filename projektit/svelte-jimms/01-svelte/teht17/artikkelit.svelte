<script>
    import Artikkeli from './artikkeli.svelte';
    let artikkelit = [
        {nimi:"Jimm's oppaat"},
        {nimi:"Jimm's blogi"}
    ]
</script>

{#each artikkelit as x}
<div>
<Artikkeli {...x}/>
</div>
{/each}

<style>
    div{
        margin-bottom:15px;
    }
</style>
