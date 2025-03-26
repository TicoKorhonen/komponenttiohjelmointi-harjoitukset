<script>
    import Alarivi from '../teht07/alarivi.svelte';
    import Ylarivi from '../teht08/ylarivi.svelte';
</script>

<div class='header'>
    <Ylarivi/>
    <Alarivi/>
</div>

<style>
    .header{
        background-color: var(--väri-tausta);
        padding-right: var(--väli-100);
        padding-left: var(--väli-100);
    }
</style>