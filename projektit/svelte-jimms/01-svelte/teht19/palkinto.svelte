<script>
    import Palkinnot from './palkinnot.svelte'
    let palkinto = [
        {url:"#",kuva:"#"},
        {url:"#",kuva:"#"}
    ]
</script>

{#each palkinto as x}
<Palkinnot {...x}/>
{/each}