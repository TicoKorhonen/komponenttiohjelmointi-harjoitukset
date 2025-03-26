<script>
    let {otsikko, otsikkotaso = 'h2', children} = $props();
</script>

{#if otsikkotaso == 'h2'}
<div>
    <h2 style='margin-top:20px; margin-bottom:15px;'>{otsikko}</h2>
    <div>{@render children()}</div>
</div>
{:else if otsikkotaso == 'h1'}
<div>
    <h1 style='margin-top:20px; margin-bottom:15px;'>{otsikko}</h1>
    <div>{@render children()}</div>
</div>
{:else if otsikkotaso == 'h3'}
<div>
    <h3 style='margin-top:20px; margin-bottom:15px;'>{otsikko}</h3>
    <div>{@render children()}</div>
</div>
{/if}