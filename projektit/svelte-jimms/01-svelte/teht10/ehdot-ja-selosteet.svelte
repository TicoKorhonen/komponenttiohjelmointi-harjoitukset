
<script>
    import Alkio from './ehto-tai-seloste.svelte'
    let alkiot = [
    {nimi: "a", url: "#"},
	{nimi: "b", url: "#"}
  ]
</script>

<ul>
    {#each alkiot as alkio}
    <li>
      <Alkio {...alkio} />
    </li>
    {/each}
  </ul>