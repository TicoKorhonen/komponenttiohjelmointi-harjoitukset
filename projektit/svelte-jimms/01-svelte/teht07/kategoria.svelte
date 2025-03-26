<script>
  import KategoriaPudotusvalikko from '../teht25/kategoria-pudotusvalikko-sisalto.svelte'
  let { nimi, url } = $props(); 
</script>

<style>

  .kategoria__nimi{
    display:flex;
    height:100%;
    justify-content: center;
  }
  .kategoria{
    text-decoration: none;
    color:white;
    height:100%;
    width:100%;
    align-content: center;
  }

  .kategoria:hover a{
    color:var(--väri-hover-teksti)
  }

  .kategoria:hover{
    background-color: white;
  }

  a{
    color:var(--väri-ensisijainen);
    text-decoration: none;
    align-content: center;
  }


  .kategoria:hover :global(.kategoria__pudotusvalikko) {
    display:flex;
    position:absolute;
  }


</style>

<div class='kategoria'>
  <div class="kategoria__nimi">
  <a href={url}>{nimi}</a>
  </div>
  <KategoriaPudotusvalikko kategoria={nimi}/>
</div>


