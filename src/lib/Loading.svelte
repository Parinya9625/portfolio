<script lang="ts">
    import { fade } from 'svelte/transition';
</script>

<div transition:fade>
    <h1> Loading... </h1>
</div>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 10;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgb(208, 223, 234);
    }
</style>