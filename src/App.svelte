<script lang="ts">
    import Scene from "./lib/Scene.svelte";
    import Welcome from "./lib/Welcome.svelte";
    import Loading from "./lib/Loading.svelte";
    import { isModelLoading } from "./scripts/store";
    
</script>

<main>
    <Scene />

    {#if $isModelLoading}
        <Loading />
    {:else}
        <Welcome />
    {/if}

</main>

<style>
</style>
