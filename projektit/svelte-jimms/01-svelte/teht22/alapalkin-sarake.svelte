<script>
    let {leveys = 1, children} = $props();
</script>

<div class='alapalkin-sarake' style="display:flex;flex: {leveys};">
{@render children()}
</div>

