<section>
    <div id="contact">
        <p> CONTACT </p>
        <a class="card" href="mailto:parinya.wongm@bumail.net">
            <i class="fa-solid fa-envelope"></i>
            Email
        </a>
        <a class="card" href="https://www.linkedin.com/in/parinya-wongmanee-1b457624b/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
            LinkedIn
        </a>
        <a class="card" href="https://github.com/Parinya9625/" target="_blank">
            <i class="fa-brands fa-github"></i>
            Github
        </a>
    </div>
</section>

<style>
    @import "../assets/fontawesome/css/all.css";

    #contact {
        grid-column: 2 / 6;
        margin-top: 3vmin;
    }
    #contact > p {
        font-weight: bold;
        font-size: 7vmin;
    }
    
    i {
        padding-right: 2vmin;
    }

    .card {
        display: block;
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 3vmin;
        margin: 3vmin 0px;
        padding: 3vmin;
        font-size: 2.5vmin;
        transition: 200ms;
        text-decoration: none;
        color: black;
    }
    .card:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
        transform: scale(1.05, 1.05);
    }


    @media only screen and (max-width: 1024px) {
        #contact {
            grid-column: 2;
        }
    }
</style>