<script>
    let {nimi, url='#'} = $props();
</script>

<a href={url}>{nimi}</a>

<style>
    a{
        text-decoration: none;
        color:white;
    }
</style>