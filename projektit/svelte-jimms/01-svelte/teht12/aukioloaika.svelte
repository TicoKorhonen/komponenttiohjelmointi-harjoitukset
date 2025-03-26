<script>
    import Auki from './auki.svelte';
    let {auki} = $props();
</script>


{#each auki as aukii}
<div class='test'>
<Auki {...aukii}/> 
</div>
{/each}

<style>

    .test{
        display:inline;
    }
    .test:first-child::after{
        content:', ';
    }

</style>