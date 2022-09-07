<script lang="ts">
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMount } from "svelte";
    import {
        useCanvas,
        cameraTargetTo,
        cameraTargetFrom,
        timelineProgress,
    } from "../store";

    import Welcome from "./Welcome.svelte";
    import Contact from "./Contact.svelte";

    let screenWidth;
    let scrollY;
    let camera = $useCanvas.camera;
    let updateCanvas = $useCanvas.invalidate;
    let startTimeline: boolean = false;

    let moveToScreen;
    let moveFromScreen;
    let contact;

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
                scrub: 1,
            },
        });

        tl_moveFromScreen = gsap.timeline({
            scrollTrigger: {
                trigger: moveFromScreen,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 1,
            },
        });

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: contact,
        //         start: "top center",
        //         pin: true,
        //         scrub: 1,
        //         markers: true,
        //     },
        //     paused: true,
        // }).fromTo(contact, {opacity: 0, duration: 1}, {opacity: 1, duration: 1});

        let mm = gsap.matchMedia();

        // phone / tablet
        mm.add("(max-width: 1024px)", () => {
            tl_moveToScreen.fromTo($cameraTargetTo.position, {
                x: 1.55,
                y: 2.75,
                z: 0,
                onUpdate: update,
            }, {
                x: 0,
                y: 1.825,
                z: 0,
                onUpdate: update,
                onStart: function() {
                    startTimeline = true;
                },
            });

            tl_moveFromScreen.fromTo($cameraTargetFrom.position, {
                x: 0,
                y: 0.35,
                z: -19,
                onUpdate: update,
            }, {
                x: -4.6,
                y: 0,
                z: 8,
                onUpdate: update,
            });
            
        });

        // desktop
        mm.add("(min-width: 1025px)", () => {
            tl_moveToScreen.fromTo($cameraTargetTo.position, {
                x: 5,
                y: 0.5,
                onUpdate: update,
            }, {
                x: 0,
                y: 1.825,
                z: 0,
                onUpdate: update,
                onStart: function() {
                    startTimeline = true;
                },
            });

            tl_moveFromScreen.fromTo($cameraTargetFrom.position, {
                x: 0,
                y: 0.35,
                z: -19,
                onUpdate: update,
            }, {
                x: -2,
                y: 0.5,
                z: 8,
                onUpdate: update,
            });

        });
    });
    
    
    function update() {
        updateCanvas();

        // quick fix - tl_mts 1, tl_mfs 0 when start page - dny
        if (tl_moveToScreen.progress() + tl_moveFromScreen.progress() == 0)
            startTimeline = false;
        
        timelineProgress.set(startTimeline ? tl_moveToScreen.progress() + tl_moveFromScreen.progress() : 0);
    }
</script>

<svelte:window on:resize={update} bind:scrollY={scrollY} />

{#if scrollY > 200}
    <a class="top-btn" href="#top"> <i class="fa-solid fa-arrow-up"></i> </a>
{/if}

<Welcome />

<div bind:this={moveToScreen}>
    <!-- <h1>tl_moveToScreen</h1> -->
</div>

<div id="toScreen" />
<Welcome />

<Welcome />

<div id="fromScreen" />
<div bind:this={moveFromScreen}>
    <!-- <h1>tl_moveFromScreen</h1> -->
</div>

<div bind:this={contact} id="contact">
    <Contact />
</div>

<style>
    @import "../assets/fontawesome/css/all.css";

    

    .top-btn {
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.75);
        width: 64px;
        height: 64px;
        border-radius: 40px;
        position: fixed;
        bottom: 3vmin;
        right: 3vmin;
        font-size: 24px;
        transition: 200ms;
        text-decoration: none;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
