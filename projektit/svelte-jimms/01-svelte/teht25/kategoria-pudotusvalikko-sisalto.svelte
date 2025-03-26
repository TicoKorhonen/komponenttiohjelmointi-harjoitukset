<script>
let {kategoria} = $props();

// ehto ? then-haara : else-haara

</script>


<style>
    .kategoria__pudotusvalikko {
        display:none;
        color:black;
        width: var(--sivun-sisällön-leveys);
        margin-left:200px;
        background-color: rgb(215, 215, 215);
    }

</style>

<div 
    class="kategoria__pudotusvalikko" 
    style='height:540px; box-sizing:border-box; left:0;'
>
    {kategoria}
</div>
