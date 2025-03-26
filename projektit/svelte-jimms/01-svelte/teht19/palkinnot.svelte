<script>
    let {url, kuva} = $props();
</script>

<a href={url}><img alt='palkinto' src={kuva}></a>

<style>
    a{
        text-decoration: none;
        color:white;
    }
</style>