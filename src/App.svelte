<script lang="ts">
    import Scene from "./lib/Scene.svelte";
    import Loading from "./lib/Loading.svelte";
    import Content from "./lib/Content.svelte";
</script>

<main>
    <Scene />

    <Loading>
        <Content />
    </Loading>
</main>