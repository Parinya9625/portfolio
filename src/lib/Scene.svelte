<script lang="ts">
    import {
        Canvas,
        Mesh,
        PerspectiveCamera,
        AmbientLight,
        DirectionalLight,
        type Position,
type Rotation,
    } from "@threlte/core";
    import { GLTF } from "@threlte/extras";
    import { DEG2RAD } from "three/src/math/MathUtils";
    import { MeshStandardMaterial, DoubleSide, PlaneGeometry, Vector3 } from "three";
    import InsideCanvas from "./InsideCanvas.svelte";

    function V3DEG2RAD(vector: {x?: number, y?: number, z?: number}) {
        return {x: DEG2RAD * vector.x, y: DEG2RAD * vector.y, z: DEG2RAD * vector.z}
    }

    let screenWidth: number;

    // Large screen
    let cameraPosLarge: Position = {x: -7.5, y: 6.5, z: 11.7};
    let cameraRotLarge: Rotation = V3DEG2RAD({x: -27.5, y: -43.7, z: -20});

    // Small screen
    let cameraPosSmall: Position = {x: -13.5, y: 9.5, z: 14.2};
    let cameraRotSmall: Rotation = V3DEG2RAD({x: -27.5, y: -43.7, z: -20});


    // let cameraPosLarge: Position = { x: -9.1, y: 6.5, z: 11.5 };
    // let cameraPosSmall: Position = { x: -13.1, y: 10.5, z: 15.5 };

    // let cameraLALarge: LookAt = { x: 1.5, y: 2.3, z: 3 };
    // let cameraLASmall: LookAt = { x: 1.5, y: 2.3, z: 0 };

    $: cameraPosition = screenWidth >= 1024 ? cameraPosLarge : cameraPosSmall;
    $: cameraRotation = screenWidth >= 1024 ? cameraRotLarge : cameraRotSmall;

    // rotate
    // x -> + up, - down
    // y -> + left, - right
    // z -> + v-| , - |-V 

    // position
    // x -> + right, - left
    // y -> + up, - down
    // z -> + back, - forward (face look at mornitor) 

</script>

<svelte:window bind:innerWidth={screenWidth} />
<!-- lookAt={cameraLookAt} -->
<div id="scene">
    <Canvas>
        <!-- camera -->
        <PerspectiveCamera
            fov={24}
            position={cameraPosition}
            rotation={cameraRotation}>
        </PerspectiveCamera>

        <!-- light -->
        <AmbientLight intensity={1} />
        <DirectionalLight shadow intensity={0.5} position={{ y: 50 }} />

        <!-- model -->
        <GLTF url="../assets/room.gltf" castShadow useDraco={true} />

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
    }
</style>
