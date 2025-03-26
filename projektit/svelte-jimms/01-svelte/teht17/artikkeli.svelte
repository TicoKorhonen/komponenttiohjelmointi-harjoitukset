<script>
    import { getContext } from 'svelte';
    let {nimi, url='#'} = $props();
</script>

<div>
{#if getContext('sivuston-nimi') == null}
<a href={url}>{nimi}</a>
{:else}
<a href={url}>{getContext('sivuston-nimi')+' '+nimi}</a>
{/if}
</div>

<style>
    a{
        text-decoration: none;
        color:white;
    }
</style>