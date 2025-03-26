<script>
    let {url,nimi} = $props();
</script>
<div>
    <a href={url}>{nimi}</a>
</div>

<style>
    a{
        text-decoration: none;
        color:black;
    }
</style>