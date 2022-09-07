<script lang="ts">
    import AbouteMeSvg from "../assets/about_me.svg";
    import SkillsSvg from "../assets/skills.svg";
</script>

<section>
    <div>
        <img src={AbouteMeSvg} alt="about me detail" />

        <img src={SkillsSvg} alt="parinya skills" />
    </div>
</section>

<style>
    section > div {
        grid-column: 8 / 12;
        display: grid;
        align-items: center;
    }


    @media only screen and (max-width: 1024px) {
        section > div {
            grid-column: 2 / 3;
            gap: 5vmin;
            height: fit-content;
        }
    }

</style>