<script>
    import Otsikko from './otsikko.svelte'
    import Haku from './haku.svelte'
    import Toiminnot from './toiminnot.svelte'
    import Burgerinappi from '../teht25/kategoria-pudotusvalikko.svelte'
</script>

<style>
.ylärivi{
    display:flex;
    justify-content: row;
    width:100%;
    padding-top:14px;
    padding-bottom:3px;
}


</style>

<div class="ylärivi">
    <div class='ylärivi__vasen' style='display:flex; width:100%;'>
    <div style='display:flex;'>
            <Burgerinappi/>
            <Otsikko url="#"/>
    </div>
        <Haku url="#"/>
    </div>
    <Toiminnot/>
</div>