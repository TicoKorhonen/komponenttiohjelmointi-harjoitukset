<script>
    import IkoniJaTeksti  from "../teht13/ikoni-ja-teksti.svelte";
    let {nimi, url, kuvaa} = $props();
</script>

<a href={url}><IkoniJaTeksti {...{teksti:nimi, kuva:kuvaa}}/></a>
<style>
    a{
        display:flex;
        text-decoration: none;
        color:white;
    }
</style>