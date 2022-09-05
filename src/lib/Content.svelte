<script lang="ts">
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMount } from "svelte";
    import Welcome from "./Welcome.svelte";
    import {
        useCanvas,
        cameraTargetTo,
        cameraTargetFrom,
        timelineProgress,
    } from "../store";

    let screenWidth;
    let moveToScreen;
    let moveFromScreen;
    let camera = $useCanvas.camera;
    let updateCanvas = $useCanvas.invalidate;

    let tl_moveToScreen: gsap.core.Timeline;
    let tl_moveFromScreen: gsap.core.Timeline;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        tl_moveToScreen = gsap.timeline({
            scrollTrigger: {
                trigger: moveToScreen,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: true,
                markers: true,
            },
        });

        tl_moveFromScreen = gsap.timeline({
            scrollTrigger: {
                trigger: moveFromScreen,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: true,
                markers: true,
            },
        });

        resize();
    });

    function resize() {
        screenWidth = window.innerWidth;

        tl_moveToScreen.clear();

        tl_moveToScreen.to($cameraTargetTo.position, {
            x: 0,
            y: 1.825,
            z: 0,
            onUpdate: function () {
                updateCanvas();
                timelineProgress.set(
                    tl_moveToScreen.progress() + tl_moveFromScreen.progress()
                );
            },
        });

        tl_moveFromScreen.to($cameraTargetFrom.position, {
            x: screenWidth >= 1024 ? -2 : -4.6,
            y: screenWidth >= 1024 ? 0.5 : 0,
            z: screenWidth >= 1024 ? 8 : 8,
            onUpdate: function () {
                updateCanvas();
                timelineProgress.set(
                    tl_moveToScreen.progress() + tl_moveFromScreen.progress()
                );
            },
        });
    }
</script>

<svelte:window on:resize={resize} />

<Welcome />
<div bind:this={moveToScreen}>
    <h1>tl_moveToScreen</h1>
</div>
<Welcome />
<Welcome />
<div bind:this={moveFromScreen}>
    <h1>tl_moveFromScreen</h1>
</div>
<Welcome />

<style>
</style>
