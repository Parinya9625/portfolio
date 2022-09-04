import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Camera } from "three";
import type { ThrelteContext } from "@threlte/core";

export const useCanvas: Writable<ThrelteContext> = writable();