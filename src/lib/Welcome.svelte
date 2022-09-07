<script lang="ts">
    import ScrollSvg from "../assets/mouse_scroll.svg";
</script>

<section>
    <nav id="top">
        <a href="#about"> About </a>
        <a href="#projects"> Projects </a>
        <a href="#contact"> Contact </a>
    </nav>
    
    <div>
        <p id="name"> PARINYA <br> WONGMANEE </p>
        <p id="description">I love coding and love learning new things.</p>
    </div>

    <img id="scroll-icon" src={ScrollSvg} alt="scroll content" />

</section>

<style>

    section {
        grid-template-rows: min-content auto;
    }
    section > div {
        grid-column: 5 / 12;
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

    #scroll-icon {
        position: absolute;
        bottom: 3vh;
        left: calc(50vw - 32px);
        width: 64px;
        height: 64px;
    }

    nav {
        grid-column: 1 / 13;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 1vmin;
    }
    nav > a {
        height: fit-content;
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 3vmin;
        font-size: 1.75vmin;
        text-decoration: none;
        color: black;
        padding: 2vmin 4vmin;
        transition: 200ms;
        margin: 2vmin 1vmin;
    }   

    nav > a:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
        transform: scale(1.05, 1.05);
    }
    

    @media only screen and (max-width: 1024px) {
        section > div {
            grid-column: 2;
        }

        nav {
            grid-column: 1 / 4;
        }

        nav > a {
            font-size: 2.25vmin;
        }

        #name {
            font-size: 9.5vmin;
        }
        
        #description {
            font-size: 3.5vmin;
        }
    }
</style>