<script>
    import Info from './info.svelte';
    import ShopInShops from './shop-in-shops.svelte';
    import Artikkelit from './artikkelit.svelte';
    import Palkinnot from './palkinnot.svelte';
</script>

<div class="alapalkin-alasarake">
    <div class='alapalkin-alasarake__info-shops'>
        <Info/>
        <ShopInShops/>
    </div>
    <div class='alapalkin-alasarake__artikkelit-palkinnot'>
        <Artikkelit/>
        <Palkinnot/>
    </div>
</div>

<style>

    .alapalkin-alasarake__info-shops{
        display:flex;
        flex:1;
    }

    .alapalkin-alasarake__artikkelit-palkinnot{
        display:flex;
        flex:1;
    }
    
    .alapalkin-alasarake{
        display:flex;
    }
</style>