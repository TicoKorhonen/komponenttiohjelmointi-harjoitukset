<script>
    let {aukeaa, sulkeutuu} = $props();
</script>

{#if aukeaa == null && sulkeutuu == null}
24 / 7
{:else if aukeaa && sulkeutuu}
{aukeaa+'-'+sulkeutuu}
{:else if aukeaa}
{aukeaa+'-'}
{:else if sulkeutuu}
{'-'+sulkeutuu}
{/if}