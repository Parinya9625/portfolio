<script lang="ts">
    import ProjectsSvg from "../assets/projects.svg";
    import ProjectCard from "./ProjectCard.svelte";
    
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Pagination, Navigation } from "swiper";
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";

    import PortfolioImg from "../assets/projects/portfolio.png";
    import LetsMeetImg from "../assets/projects/letsmeet.png";
    import PDPGasImg from "../assets/projects/pdpgas.png";
    import PlannerImg from "../assets/projects/planner.png";

</script>

<section>
    <div class="header">
        <img src={ProjectsSvg} alt="projects" />
    </div>
    <div class="content-wrapper">
        <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                "769": {
                    slidesPerView: 2,
                },
                "1025": {
                    slidesPerView: 3,
                },
                "1441": {
                    slidesPerView: 4,
                }
            }}
        >
            <SwiperSlide> 
                <ProjectCard
                    imageSrc={PortfolioImg}
                    title="Web Portfolio"
                    description="My current web porfolio." 
                    languages={[
                        { name: "Svelte", backgroundColor: "#F23B00", foregroundColor: "#F2F2F2" },
                        { name: "TypeScript", backgroundColor: "#2F72BC", foregroundColor: "#F2F2F2" },
                        { name: "Threlte", backgroundColor: "#F23B00", foregroundColor: "#F2F2F2" },
                        { name: "Three.js", backgroundColor: "#000000", foregroundColor: "#FFFFFF" },
                        { name: "GSAP", backgroundColor: "#88CE02", foregroundColor: "#FFFFFF" },
                        { name: "Swiper", backgroundColor: "#0080FF", foregroundColor: "#FFFFFF" },
                        { name: "HTML", backgroundColor: "#000000", foregroundColor: "#000000", onlyBorder: true },
                        { name: "CSS", backgroundColor: "#000000", foregroundColor: "#000000", onlyBorder: true },
                    ]} 
                />
            </SwiperSlide>
            <SwiperSlide class="swiper-slide"> 
                <ProjectCard
                    imageSrc={LetsMeetImg}
                    title="LetsMeet Application"
                    description="Application for create group activities for finding new friends." 
                    languages={[
                        { name: "Flutter", backgroundColor: "#41c6f0", foregroundColor: "#FFFFFF" },
                        { name: "Dart", backgroundColor: "#2cb7f6", foregroundColor: "#FFFFFF" },
                        { name: "Firebase", backgroundColor: "#ffcb2e", foregroundColor: "#FFFFFF" },
                    ]} 
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    imageSrc={PDPGasImg}
                    title="PDP Gas Web Application"
                    description="System used for warehouse management and store ordering system." 
                    languages={[
                        { name: "Vue.js", backgroundColor: "#3EAF7C", foregroundColor: "#FFFFFF" },
                        { name: "JavaScript", backgroundColor: "#EAD41C", foregroundColor: "#FFFFFF" },
                        { name: "C#", backgroundColor: "#7A2E7D", foregroundColor: "#FFFFFF" },
                        { name: "HTML", backgroundColor: "#000000", foregroundColor: "#000000", onlyBorder: true },
                        { name: "CSS", backgroundColor: "#000000", foregroundColor: "#000000", onlyBorder: true },
                    ]} 
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    imageSrc={PlannerImg}
                    title="Planner"
                    description="Application to help plan study and manage class schedules." 
                    languages={[
                        { name: "Flutter", backgroundColor: "#41c6f0", foregroundColor: "#FFFFFF" },
                        { name: "Dart", backgroundColor: "#2cb7f6", foregroundColor: "#FFFFFF" },
                        { name: "Firebase", backgroundColor: "#ffcb2e", foregroundColor: "#FFFFFF" },
                    ]} 
                />
            </SwiperSlide>
        </Swiper>
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
        margin-bottom: 5vmin;
    }
    .header > img {
        height: 10vmin;
    }

    .content-wrapper {
        grid-column: 1 / 13;
        /* height: 100px; */
    }

    @media only screen and (max-width: 1024px) {    

        .header {
            grid-column: 2 / 3;
        }
        .header > img {
            height: auto;
        }

        .content-wrapper {
            grid-column: 1 / 4;
        }

    }

</style>

