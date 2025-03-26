<script>
    import { getContext } from 'svelte';
    let teksti = getContext('hakusana');
    let hakusana = $state();
    let handleKeypress = (e) => {
        if(e.keyCode === 13){
            teksti.sisältö = hakusana
        }
    }
</script>

<div class='hakupalkki'>
    <div class='hakupalkki__kuvake'>
        <img style='width:25px; height:25px;' src='src/harjotukset/haku.png'>
    </div>
    <input type="text" placeholder='Hae tuotteista' bind:value={hakusana} onkeypress={handleKeypress}>
</div>

<style>

    .hakupalkki__kuvake{
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width:40px;
        height:100%;
    }

    .hakupalkki{
        border:solid 2px grey;
        margin-left:20px;
        background-color: white;
        display:flex;
        width:100%;
        min-width:150px;
        align-items: center;
    }

    input{
        outline: 0;
        border:0;
        font-size: 17px;
        color:black;
        align-content: center;
        height:45px;
        width:100%;
        background-color: white;
    }
</style>