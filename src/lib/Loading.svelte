<script lang="ts">
    import { fade } from "svelte/transition";
    import { tweened } from "svelte/motion";
    import { useProgress } from "@threlte/extras";

    const { progress } = useProgress();
    let isLoading: boolean = true;

    const progressMotion = tweened(0, {
        duration: 400,
    });

    progress.subscribe(value => {
        progressMotion.set(value);
        
        // finish loaded
        if (value == 1) {
            setTimeout(() => {
                isLoading = false;
            }, 1000);
        }
    });
</script>

{#if isLoading}
    <div transition:fade>
        <progress value={$progressMotion} min=0 max=1 />
    </div>
{:else}
    <!-- CONTENT -->
    <slot />
{/if}

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