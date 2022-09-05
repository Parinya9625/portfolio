import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Object3D } from "three";
import type { ThrelteContext } from "@threlte/core";

export const useCanvas: Writable<ThrelteContext> = writable();
export const cameraTargetTo: Writable<Object3D> = writable();
export const cameraTargetFrom: Writable<Object3D> = writable();
export const timelineProgress: Writable<number> = writable(0);