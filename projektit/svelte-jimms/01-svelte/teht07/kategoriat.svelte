<script>
  import Kategoria from './kategoria.svelte';
</script>

<style>
.kategoriat{
    display:flex;
    list-style: none;
    padding: 0px;
    margin-top:0px;
    margin-bottom:0px;
    height:40px;

}

li{
  height:100%;
  flex:1;
}

</style>


<ul class="kategoriat">
  <li>
    <Kategoria nimi="Tietokoneet" url="#"/>
  </li>
  <li>
    <Kategoria nimi="Komponentit" url="#" />
  </li>
  <li>
    <Kategoria nimi="Oheislaitteet" url="#" />
  </li>
  <li>
    <Kategoria nimi="Pelaaminen" url="#" />
  </li>
  <li>
    <Kategoria nimi="Sim racing" url="#" />
  </li>
  <li>
    <Kategoria nimi="Verkkotuotteet" url="#" />
  </li>
  <li>
    <Kategoria nimi="Tarvikkeet" url="#" />
  </li>
  <li>
    <Kategoria nimi="Erikoistuotteet" url="#" />
  </li>
  <li>
    <Kategoria nimi="Ohjelmistot" url="#" />
  </li>
  <li>
    <Kategoria nimi="Palvelut" url="#" />
  </li>
  <li>
    <Kategoria nimi="Kampanjat" url="#" />
  </li>
</ul>