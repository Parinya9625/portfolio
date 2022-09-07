<script lang="ts">
    import ProjectsSvg from "../assets/projects.svg";
</script>

<section>
    <div class="header">
        <img src={ProjectsSvg} alt="projects" />
    </div>
</section>

<style>
    section {
        grid-template-rows: min-content auto;
    }
    .header {
        grid-column: 2 / 12;
        display: flex;
        align-items: center;
        margin-top: 10vmin;
    }
    .header > img {
        height: 10vmin;
    }
</style>

