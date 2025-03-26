<script>
    import Brandi from './brandi.svelte';
    let brandit = $props();
</script>

<ul>
{#each brandit as x}
<li>
<Brandi {...x}/>
</li>
{/each}
</ul>

<style>
    ul{
        padding: 0;
        padding-right:50px;
    }
    li{
        list-style:none;
        display:inline;
    }
    li::after{
        content: ' | '
    }
    li:last-child::after{
        content:none;
    }
</style>