<script lang="ts">
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMount } from "svelte";
    import Welcome from "./Welcome.svelte";
    import { useCanvas } from "../store";

    let moveToScreen;
    let camera = $useCanvas.camera;
    let updateCanvas = $useCanvas.invalidate;
    
    let tl_moveToScreen: gsap.core.Timeline;

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

        tl_moveToScreen.to($camera.position, {
            x: 0, y: 2.1, z: 2.2,
            onUpdate: function() {
                updateCanvas();
                console.log("update position");
            },
        }).to($camera.rotation, {
            x: -0.13, y: 0, z: 0,
            onUpdate: function() {
                updateCanvas();
                console.log("update position");
            },
        });
    });

</script>

<Welcome />
<div bind:this={moveToScreen}>
    <h1> tl_moveToScreen </h1>
</div>
<Welcome />
<Welcome />


<style>
</style>