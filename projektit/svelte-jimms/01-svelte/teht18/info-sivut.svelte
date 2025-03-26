<script>
    import Info from './info-sivu.svelte'
    let infot = [
        {nimi: 'Yhteystiedot', url:"#", kuvaa: '/src/harjotukset/id.png'},
        {nimi: 'Toimitustavat', url:"#", kuvaa: '/src/harjotukset/posti.png'},
        {nimi: 'Maksutavat', url:"#", kuvaa: '/src/harjotukset/euro.png'},
        {nimi: 'Takuupalautus', url:"#",  kuvaa: '/src/harjotukset/info.png'},
        {nimi: 'Palvelut ja huolto', url:"#",  kuvaa: '/src/harjotukset/työkalut.png'},
        {nimi: 'Usein kysytyt kysymykset', url:"#",  kuvaa: '/src/harjotukset/kysymys.png'},
        {nimi: 'Yritysmyynti', url:"#",  kuvaa: '/src/harjotukset/toimisto.png'},
        {nimi: 'Ura Jimmsillä', url:"#",  kuvaa: '/src/harjotukset/salkku.png'},
        {nimi: 'Jimms Tuoteturva', url:"#",  kuvaa: '/src/harjotukset/sopimus.png'}
    ]
</script>

<ul>
{#each infot as x}
<li>
<Info {...x}/>
</li>
{/each}
</ul>

<style>
    ul{
        list-style: none;
        max-width: max-content;
        padding:0;
    }
    li{
        display:flex;
    }

</style>