<script>
    import Yhteisö from './yhteiso.svelte'
    let yhteisot = $props();
</script>

{#each yhteisot as testi}
<Yhteisö {...testi}/>
{/each}
