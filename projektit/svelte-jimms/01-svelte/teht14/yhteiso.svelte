<script>
    let {nimi,url='#'} = $props();

    const mediat = {
    "facebook": "facebook",
    "twitter": "twitter",
    "youtube": "youtube",
    "instagram": "instagram",
    "linkedin": "linkedin",
    "tiktok": "tiktok"
    }
</script>

{#if mediat[nimi.toLowerCase()] == null}
    ?
{:else}
    <div class='kuva'>
        <a href={url}><img  class='valkonen' style='position:absolute; height:30px; width:30px; margin-left:2px; margin-right:2px;' src='src/harjotukset/{mediat[nimi.toLowerCase()]}.png'>
        <img class='oranssi' style='height:100%; width:100%; margin-left:2px; margin-right:2px;' src='src/harjotukset/{mediat[nimi.toLowerCase()]}-oranssi.png'></a>
    </div>
{/if}

<style>
    .kuva{
        display:inline-block;
        margin-left:3px;
        margin-right:3px;
        width:30px;
        height:30px;
    }

    .kuva:hover .valkonen{
        display:none;
    }


</style>