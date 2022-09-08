<script lang="ts">
    export let imageSrc: string;
    export let title: string;
    export let description: string;
    export let languages: Array<{
        name: string,
        backgroundColor: string,
        foregroundColor: string,
        onlyBorder?: boolean;
    }>;
</script>

<div class="card">
    <img src={imageSrc} alt="">
    <div>
        <h1> {title} </h1>
        <div class="languages-wrapper">
            {#each languages as language, i}
                {#if language.onlyBorder}
                    <div class="language-chip" style="border: 2px solid {language.backgroundColor}; color: {language.foregroundColor}"> 
                        {language.name} 
                    </div>
                {:else}
                    <div class="language-chip" style="background-color: {language.backgroundColor}; color: {language.foregroundColor}"> 
                        {language.name}
                    </div>
                {/if}
            {/each}
        </div>
        <span class="description"> {description} </span>
        
    </div>
</div>

<style>
    h1 {
        margin: 0;
    }
    .card {
        background-color: white;
        display: grid;
        /* aspect-ratio: 1 / 1.2; */
        border-radius: 3vmin;
        padding: 3vmin;
        /* grid-template-columns: 1.5fr 1fr; */
        grid-template-rows: 0.90fr 1fr;
        height: 65vh;
    }

    img {
        height: 90%;
        width: 100%;
        object-fit: cover;
        border-radius: 2vmin;
    }

    .description {
        font-size: 16px;
    }

    .languages-wrapper {
        margin-top: 1vmin;
    }

    .language-chip {
        width: fit-content;
        display: inline-block;
        padding: 0.8vmin 1.3vmin;
        margin: 0 1vmin 1vmin 0;
        border-radius: 3vmin;
    }

    @media only screen and (max-width: 1024px) {
        .card {
            grid-template-rows: 1fr 1fr;
            padding: 4vmin;
            height: 70vh;
        }

        .description {
            font-size: 20px;
        }

        .languages-wrapper {
            margin-top: 2vmin;
        }

        .language-chip {
            width: fit-content;
            display: inline-block;
            border-radius: 6vmin;
        }
    }

    @media only screen and (max-width: 768px) {
        .language-chip {
            padding: 1.5vmin 3.5vmin;
            margin: 0 2vmin 2vmin 0;
        }
    }
</style>