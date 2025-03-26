<style>
    @font-face{
        font-family: 'openSans';
        src:url('src/harjotukset/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf')
    }
    :global(*){
        box-sizing:border-box;
    }

    :global(a){
        text-decoration: none;
        color:var(--teksti-ensisijainen);
    }
    :global(a:hover){
        color:var(--väri-hover-teksti);
    }

    :global(:root) {
        --väli-100:200px;
        --väli-200:200px;
        --fontti-koko-logo:25px;
        --fontti-koko-leipäteksti-ylärivi:17px;
        --fontti-koko-leipäteksti:15px;
        --fontti-normaali:'openSans', sans-serif;
        --väri-ensisijainen:var(--väri-valkoinen);
        --väri-toissijainen:var(--väri-harmaa);
        --väri-tausta:var(--väri-musta);
        --väri-teksti:var(--väri-valkoinen);
        --väri-teksti-haku:var(--väri-harmaa);
        --väri-valkoinen:white;
        --väri-harmaa:grey;
        --väri-musta:rgb(34, 34, 34);
        --väri-hover-teksti:orange;
        font-family: var(--fontti-normaali);
        font-size: var(--fontti-koko-leipäteksti);
        color:var(--väri-teksti);
        background-color:var(--väri-tausta);
    }

    @media (max-width: 440px) {
        :global(.alapalkin-yläsarake__myynti) {
            flex-direction: column;
        }
        :global(.alapalkin-yläsarake__yhteisö) {
            flex-direction: column;
        }
        :global(.alapalkin-alasarake__info-shops) {
            flex-direction: column;
        }
        :global(.alapalkin-alasarake__artikkelit-palkinnot) {
            flex-direction: column;
        }
    }

    @media (max-width: 680px) {
        :global(.alapalkin-yläsarake) {
            flex-direction: column;
        }
        :global(.alapalkin-alasarake) {
            flex-direction: column;
        }
        :global(.ylärivi__vasen) {
            flex-direction: column;
        }
        :global(.hakupalkki) {
            margin-top: 10px !important;
            margin-left:0 !important;
            width:calc(100% + 131px) !important;
        }
        :global(.ostoskori) {
            height:65px;
        }
        :global(.kirjautuminen) {
            height:65px;
        }
        :global(.header){
            height:160px !important;
        }
    }

    @media (max-width: 1350px) {
        :global(.aad) {
            width:65px;
        }
        :global(.header) {
            height:100px;
        }
        :global(.kategoria) {
            display:none;
        }
        :global(:root){
            --väli-100:20px;
        }
        :global(.kirjaudu__teksti) {
            display:none;
        }
        :global(.kirjautuminen) {
            width:40px !important;
        }
    }

    @media (min-width: 1350px){
        :global(:root) {
            --sivun-sisällön-leveys: calc(100% - 400px);
        }
        :global(.kategoria__hampurilaisnappi) {
            display:none;
        }
    }
</style>