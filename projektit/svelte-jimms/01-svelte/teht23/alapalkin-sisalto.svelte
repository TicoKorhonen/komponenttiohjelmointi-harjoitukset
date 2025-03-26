<script>
    import AlapalkkiYla from './alapalkin-ylasarakkeet.svelte';
    import AlapalkkiAla from './alapalkin-alasarakkeet.svelte';
</script>

<div class='alapalkki'>
    <div class='alapalkki__osat'>
        <div class='yla'>
            <AlapalkkiYla/>
        </div>
        <div class='ala'>
            <AlapalkkiAla/>
        </div>
    </div>
    <div class='footer'>
        <div style='display:flex; justify-content:center; padding-top:10px; margin-bottom:15px;'>
            <a style='margin-right:5px;' href='#'>Takuu- ja toimitustiedot</a> | <a style='margin-left:5px;' href='#'>Tietosuojaseloste</a>
        </div>
        <div style='display:flex; justify-content:center;'>
            <p>Copyright © 2025 Jimm's PC-Store Oy</p>
        </div>
    </div>
</div>

<style>


    .footer{

        background-color: rgb(0, 0, 0);
        height:80px;
        width:100%;
    }

    .yla{
        padding-top:10px;
        padding-bottom:50px;
        border-bottom: solid 1px var(--väri-toissijainen);
    }

    .ala{
        margin-bottom:20px;
    }

    .alapalkki__osat{
        padding-left: var(--väli-100);
        padding-right: var(--väli-100);
    }
</style>