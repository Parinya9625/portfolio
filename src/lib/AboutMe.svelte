<script lang="ts">
    import MeSvg from "../assets/me.svg";
    import AbouteMeSvg from "../assets/about_me.svg";
    import SkillsSvg from "../assets/skills.svg";
</script>

<section>
    <div class="me">
        <img src={MeSvg} alt="parinya" />
    </div>
    <div class="info">
        <img src={AbouteMeSvg} alt="about me detail" />

        <img src={SkillsSvg} alt="parinya skills" />
    </div>
</section>

<style>
    .me {
        grid-column: 2 / 7;
        display: grid;
        align-items: center;
        justify-items: center;
    }

    .me > img {
        width: 80%;
    }


    .info {
        grid-column: 8 / 12;
        display: grid;
        align-items: center;
    }


    @media only screen and (max-width: 1024px) {

        .me {
            grid-column: 2 / 3;
        }

        .me > img {
            width: auto;
            margin-bottom: 5vmin;
        }

        .info {
            grid-column: 2 / 3;
            gap: 5vmin;
            height: fit-content;
        }
    }

</style>