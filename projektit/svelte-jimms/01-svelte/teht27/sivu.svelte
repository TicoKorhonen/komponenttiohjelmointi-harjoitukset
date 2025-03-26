<script>
    import { setContext } from 'svelte';
    let value = $state({ sisältö: '' });
    setContext('hakusana', value);


    import Yläpalkki from '../teht09/header.svelte'
    import Sisältö from '../teht26/sivun-sisalto.svelte'
    import Alapalkki from '../teht24/alapalkki.svelte'
</script>

<div class='kokosivu'>
<Yläpalkki/>
<Sisältö/>
<Alapalkki/>
</div>

<style>
    .kokosivu{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        height:100vh;
    }
</style>