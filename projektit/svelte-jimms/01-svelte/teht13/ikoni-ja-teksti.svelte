<script>
    let {kuva,teksti} = $props();
</script>

{#if Array.isArray(teksti) == true}
<img alt='ikonijateksti' width=25px height=25px src={kuva}/>
{#each teksti as sana}
{sana+"\n"}
{/each}
{:else}
<div class='test'>
<img alt='ikonijateksti' class='kuva' width=25px height=25px src={kuva}/>
<a href='#'>{teksti}</a>
</div>
{/if}

<style>
    .test{
        max-width:max-content;
        display:flex;
        align-items: center;
    }

    .kuva{
        margin-right:8px;
    }
</style>