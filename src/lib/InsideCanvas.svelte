<script lang="ts">
    import { useThrelte } from "@threlte/core";
    import { useCanvas } from "../store";

    useCanvas.set(useThrelte());
</script>