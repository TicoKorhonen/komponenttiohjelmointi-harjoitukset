<script>
    import Brandit from '../teht16/brandit.svelte';
    import Osio from '../teht21/alapalkin-osio.svelte'
    import AlapalkinSarake from '../teht22/alapalkin-sarake.svelte'
</script>

<AlapalkinSarake>
<Osio otsikko='SHOP-IN-SHOPS'>
    <Brandit {...[
    {nimi:'APNX'},
    {nimi:'Ducky'},
    {nimi:'Endgame Gear'},
    {nimi:'HAVN'},
    {nimi:'Kolink'},
    {nimi:'Nitro Concepts'},
    {nimi:'noblechairs'},
    {nimi:'Streamplify'},
    {nimi:'TRYX'}]}/>

    <Brandit {...[
        {nimi:'Asus'},
        {nimi:'Acer'},
        {nimi:'Akasa'},
        {nimi:'ASRock'},
        {nimi:'Cooler Master'},
        {nimi:'Corsair'},
        {nimi:'Fractal Design'},
        {nimi:'Gigabyte'},
        {nimi:'Logitech'},
        {nimi:'Phanteks'}
    ]}/>

</Osio>
</AlapalkinSarake>