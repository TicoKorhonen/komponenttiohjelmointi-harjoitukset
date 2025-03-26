<script>
    import Asiakaspalvelu from './asiakaspalvelu.svelte'
    import Yritysmyynti from './yritysmyynti.svelte'
    import AlapalkinSarake from '../teht22/alapalkin-sarake.svelte'
</script>

<AlapalkinSarake>
<div style='width:90%;'>
    <div class='Asiakaspalvelu'>
        <Asiakaspalvelu/>
    </div>
    <div>
        <Yritysmyynti/>
    </div>
</div>

<style>
    .Asiakaspalvelu{
        padding-bottom:25px;
        border-bottom: solid 1px var(--väri-toissijainen);
    }
</style>
</AlapalkinSarake>