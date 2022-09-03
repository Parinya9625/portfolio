<script lang="ts">
  import {
    CircleGeometry,
    MeshStandardMaterial,
    BoxGeometry,
    DoubleSide,
  } from "three";

  import * as THREE from 'three';
  import { DEG2RAD } from "three/src/math/MathUtils";
  import {
    AmbientLight,
    Canvas,
    DirectionalLight,
    Group,
    HemisphereLight,
    Mesh,
    OrbitControls,
    PerspectiveCamera,
  } from "@threlte/core";
  import { spring } from "svelte/motion";

  
  import { useThrelte } from '@threlte/core'
  import { GLTF } from '@threlte/extras';

  import Content from './SceneContent.svelte';

  // const { invalidate } = useThrelte();


  // invalidate("Background set");

  const scale = spring(1);
</script>

<div>
  <Canvas>
    <!-- <PerspectiveCamera position={{ x: 10, y: 10, z: 10 }} fov={24}>
      <OrbitControls
        maxPolarAngle={DEG2RAD * 80}
        autoRotate={true}
        enableZoom={true}
        target={{ y: 0.5 }}
      />
    </PerspectiveCamera> -->

    <!-- <DirectionalLight shadow position={{ x: 3, y: 10, z: 10 }} />
    <DirectionalLight position={{ x: -3, y: 10, z: -10 }} intensity={0.2} /> -->
    <AmbientLight intensity={2} />

    <!-- Cube -->
    <!-- <Group scale={$scale}>
      <Mesh
        interactive
        on:pointerenter={() => ($scale = 2)}
        on:pointerleave={() => ($scale = 1)}
        position={{ y: 0.5 }}
        castShadow
        geometry={new BoxGeometry(1, 1, 1)}
        material={new MeshStandardMaterial({ color: "#333333" })}
      />
    </Group> -->

    <Content />

    <!-- <GLTF url="../assets/room.gltf" receiveShadow /> -->

    <!-- Floor -->
    <!-- <Mesh
      receiveShadow
      rotation={{ x: -90 * (Math.PI / 180) }}
      geometry={new CircleGeometry(3, 72)}
      material={new MeshStandardMaterial({ side: DoubleSide, color: "white" })}
    /> -->
  </Canvas>
</div>

<style>
  div {
    height: 100vh;
    width: 100vw;
  }
</style>
