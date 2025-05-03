import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, {useState} from 'react';
import Case from './case';
import case01 from "../../../assets/img/cases/cases01.webp";
import case02 from "../../../assets/img/cases/cases02.webp";
import case03 from "../../../assets/img/cases/cases03.webp";

function Cases() {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    }

    const CustomLeftArrow = ({ onClick }) => {
        return (

            <div onClick={onClick} className="group w-[60px] h-[60px] absolute  left-0  z-3 bg-white rounded-full shadow-btnCarousel ">
                <svg viewBox="0 0 24 24" className="group-hover:fill-orange-500 transition w-[55px] h-[55px]">
                    <path transform="translate(4, 1)" d="M0.93934 13.0607C0.353553 12.4749 0.353553 11.5251 0.93934 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.93934 13.0607ZM3 13.5H2V10.5H3V13.5Z"></path>
                </svg>
            </div>
        )
    }

    const CustomRightArrow = ({ onClick }) => {
        return (


            <div onClick={onClick} className="group w-[60px] h-[60px] absolute  right-0  z-3 bg-white rounded-full shadow-btnCarousel ">
                <svg viewBox="0 0 24 24" className="group-hover:fill-orange-500 transition w-[55px] h-[55px]">
                    <path transform="translate(7, 1)" d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z"></path>
                </svg>
            </div>

        )
    }

    const [cases, casesState] = useState([
        {
            title: "Equine is an NFT horse racing game. Race, breed, sell & buy horses",
            link: "/cases/equine-is-an-nft-horse-racing-game-race-breed-sell-buy-horses/",
            image: case01,
            tags: ["Research", "UX/UI Design", "Development"],
        },
        {
            title: "Sprightful",
            link: "/cases/sprightful/",
            image: case02,
            tags: ["UX/UI Design", "Research", "Development"],
        },
        {
            title: "Diabetes Control",
            link: "/cases/diabetes-control/",
            image: case03,
            tags: ["Development", "Product Design"],
        },
        {
            title: "Databox",
            link: "/cases/data-pipeline-app/",
            image: case01,
            tags: ["Development", "Product Design"],
        },
        {
            title: "Tasty",
            link: "/cases/tasty/",
            image: case02,
            tags: ["Development", "Product Design"],
        },
        {
            title: "Lime Home",
            link: "/cases/limehome/",
            image: case03,
            tags: ["Product Design"],
        },
    ]);

    // classNames para cada elemento
    const seccioinCases = "py-[17px] bg-[#F3F3F3]";
    const container = "max-w-[1142px] mx-auto"
    const title = "text-[32px] leading-[48px]"
    const cases__slider_wrp = "mt-[48px] pl-[calc((100%-1142px)/2)]"
    const swiper_cases__slider = ""

    return (
        <section className={seccioinCases}>
            <div className={container}>
                <h2 id="title_container_cases" className={title} >Some of Our Cases</h2>
            </div>
            <div className={cases__slider_wrp}>
                <div className={swiper_cases__slider}>
                    <div className="swiper-wrapper">
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container-with-dots"
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />}
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=" px-[15px]"
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={responsive}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            
                        >
                            
                           { cases.map((caseItem , index)=>{
                                return(
                                    <Case
                                        key={index}
                                        title={caseItem.title}
                                        link={caseItem.link}
                                        image={caseItem.image}
                                        tags={caseItem.tags}

                                    />
                                    )
                        
                                    })}

                        </Carousel>
                    </div>
                </div>


            </div>
        </section>

    )
}

export default Cases