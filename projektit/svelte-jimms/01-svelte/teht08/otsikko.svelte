<script>
    let { url } = $props(); 
</script>



<div class='otsikko'>
    <a href={url}>Otsikko</a>
</div>

<style>
    a{
        text-decoration: none;
        color:white;
        font-size:var(--fontti-koko-logo);
        font-weight: bold;
    }
    .otsikko{
        display:flex;
        align-items: center;
    }
</style>