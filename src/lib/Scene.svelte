<script lang="ts">
    import {
        Canvas,
        Mesh,
        PerspectiveCamera,
        AmbientLight,
        DirectionalLight,
        type Position,
        type LookAt,
    } from "@threlte/core";
    import { GLTF } from "@threlte/extras";
    import { DEG2RAD } from "three/src/math/MathUtils";
    import { MeshStandardMaterial, DoubleSide, PlaneGeometry } from "three";
    import { isModelLoading } from "../scripts/store";

    let screenWidth: number;

    isModelLoading.update(() => true);

    let cameraPosLarge: Position = { x: -9.1, y: 6.5, z: 11.5 };
    let cameraPosSmall: Position = { x: -13.1, y: 10.5, z: 15.5 };

    let cameraLALarge: LookAt = { x: 1.5, y: 2.3, z: 3 };
    let cameraLASmall: LookAt = { x: 1.5, y: 2.3, z: 0 };

    $: cameraPostion = screenWidth > 1024 ? cameraPosLarge : cameraPosSmall;
    $: cameraLookAt = screenWidth > 1024 ? cameraLALarge : cameraLASmall;

    function onFinishLoad() {
        isModelLoading.update(() => false);
    }
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div id="scene">
    <Canvas>
        <!-- camera -->
        <PerspectiveCamera
            position={cameraPostion}
            fov={24}
            lookAt={cameraLookAt}
        >
            <!-- <OrbitControls
                maxPolarAngle={DEG2RAD * 80}
                autoRotate={false}
                enableZoom={true}
            /> -->
        </PerspectiveCamera>

        <!-- light -->
        <AmbientLight intensity={1} />
        <DirectionalLight shadow intensity={0.5} position={{ y: 50 }} />

        <!-- model -->
        <GLTF url="../assets/room.gltf" castShadow on:load={onFinishLoad} />

        <!-- floor -->
        <Mesh
            receiveShadow
            rotation={{ x: -90 * (Math.PI / 180) }}
            geometry={new PlaneGeometry(200, 200)}
            material={new MeshStandardMaterial({
                side: DoubleSide,
                color: 0x5b98e3,
            })}
        />
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
    }
</style>
