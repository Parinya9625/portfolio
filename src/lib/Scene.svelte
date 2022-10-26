<script lang="ts">
    import {
        Canvas,
        Mesh,
        PerspectiveCamera,
        AmbientLight,
        DirectionalLight,
        Object3D,
    } from "@threlte/core";
    import { GLTF } from "@threlte/extras";
    import { DEG2RAD } from "three/src/math/MathUtils";
    import {
        MeshStandardMaterial,
        DoubleSide,
        PlaneGeometry,
        Vector3,
        CubicBezierCurve3,
    } from "three";
    import InsideCanvas from "./InsideCanvas.svelte";
    import {
        cameraTargetTo,
        cameraTargetFrom,
        timelineProgress,
    } from "../store";
    import { onMount } from "svelte";

    function V3DEG2RAD(vector: { x?: number; y?: number; z?: number }) {
        return {
            x: DEG2RAD * vector.x,
            y: DEG2RAD * vector.y,
            z: DEG2RAD * vector.z,
        };
    }

    let screenWidth: number;

    let cameraLineToScreen: CubicBezierCurve3 = new CubicBezierCurve3(
        new Vector3(0, 0, 0),
        new Vector3(0, 0, 0),
        new Vector3(0, 0, 0),
        new Vector3(0, 0, 0)
    );
    let cameraLineFromScreen: CubicBezierCurve3 = new CubicBezierCurve3(
        new Vector3(0, 0, 0),
        new Vector3(0, 0, 0),
        new Vector3(0, 0, 0),
        new Vector3(0, 0, 0)
    );

    $: cameraPosition =
        $timelineProgress <= 1
            ? cameraLineToScreen.getPoint($timelineProgress)
            : cameraLineFromScreen.getPoint($timelineProgress - 1);
    $: targetToStartPosition =
        screenWidth >= 1024 ? { x: 5, y: 0.5 } : { x: 1.55, y: 2.75 };
    let targetFromStartPosition = { x: 0, y: 0.35, z: -19 };

    function resize() {
        screenWidth = window.innerWidth;

        cameraLineToScreen = new CubicBezierCurve3(
            screenWidth >= 1024
                ? new Vector3(-7.5, 6.5, 11.7)
                : new Vector3(-13.1, 10.5, 15.5),
            new Vector3(0, 6, 8),
            new Vector3(0, 4.5, 5),
            new Vector3(0, 2, 1.8)
        );
        cameraLineFromScreen = new CubicBezierCurve3(
            new Vector3(0, 2, 1.8),
            new Vector3(0, 2, 5),
            new Vector3(7, 4, 5),
            screenWidth >= 1024
                ? new Vector3(8.8, 3.8, -6.8)
                : new Vector3(13, 10.5, -15.5)
        );

        if ($timelineProgress <= 1)
            cameraPosition = cameraLineToScreen.getPoint($timelineProgress);
        if ($timelineProgress <= 2) {
            cameraPosition = cameraLineFromScreen.getPoint(
                $timelineProgress - 1
            );
        }
    }

    onMount(() => {
        resize();
    });
</script>

<svelte:window bind:innerWidth={screenWidth} on:resize={resize} />

<div id="scene">
    <Canvas>
        <!-- camera -->
        <PerspectiveCamera
            fov={24}
            position={cameraPosition}
            lookAt={$timelineProgress <= 1
                ? $cameraTargetTo
                : $cameraTargetFrom}
        />

        <!-- light -->
        <AmbientLight intensity={1} />
        <DirectionalLight shadow intensity={0.5} position={{ y: 50 }} />

        <!-- model -->
        <GLTF url="../assets/myroom.gltf" castShadow useDraco={true} />

        <!-- Look at -->
        <!-- Start to Screen -->
        <Object3D
            bind:object={$cameraTargetTo}
            position={targetToStartPosition}
        />
        <!-- Screen to End -->
        <Object3D
            bind:object={$cameraTargetFrom}
            position={targetFromStartPosition}
        />

        <!-- floor -->
        <Mesh
            receiveShadow
            rotation={{ x: -90 * (Math.PI / 180) }}
            geometry={new PlaneGeometry(100, 100)}
            material={new MeshStandardMaterial({
                side: DoubleSide,
                color: 0x5b98e3,
            })}
        />

        <!-- for get canvas context -->
        <InsideCanvas />
    </Canvas>
</div>

<style>
    #scene {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: -1;

        background-color: rgb(208, 223, 234);
    }
</style>
