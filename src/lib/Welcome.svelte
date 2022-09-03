<section>
    <div>
        <p id="name"> PARINYA <br> WONGMANEE </p>
        <p id="description">I love coding and love learning new things.</p>
    </div>
</section>

<style>
    section > div {
        grid-column: 7 / 12;
        margin-top: 12vh;
    }

    p {
        text-align: right;
        margin: 0;
    }

    #name {
        font-size: 8vmin;
        font-weight: bold;
    }
    #description {
        font-size: 3vmin;
        margin-top: 3vmin;
        color: rgb(99, 99, 99);
    }

    @media only screen and (max-width: 1024px) {
        section > div {
            grid-column: 2;
        }
    }
</style>