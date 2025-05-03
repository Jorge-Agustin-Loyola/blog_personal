import React from 'react'

const Expertise = () => {
    return (

        <section id="Expertise" className=" text-[16px] leading-[26px] font-[#000] pt-[66px] pb-[77px]">

    
           
            <div className="mx-auto w-full max-w-[1142px]">

                        
                <div className="flex-col lg:flex">
 

                    <div className="w-full max-w-1/2 lg:pr-[125px]"> 

                        
                        <h2 id="expertice_title" className="text-[38px] leading-[48px]" >We build more than just apps</h2>
                        
 
                        <p className="mt-[42px] text-[18px] leading-[32px] text-[#6B6B6B] " data-aos="fade-in" data-aos-delay="150">Fireart Studio is a boutique digital product design agency. We have 50+ JS and design experts on board and 6+ years of experience building digital projects from scratch and updating existing ones.</p>
                    </div>
                    <div className="w-full max-w-1/2 lg:pr-[125px]">
                        <p className="text-[18px] leading-[28px] text-[#6B6B6B]" data-aos="fade-in" data-aos-delay="200">Since 2013, we’ve been delivering high-quality design, development, and branding services to global companies and startups, from the first concepts up to the product launch and post-launch support and promotion.</p>

                        <p className="text-[18px] leading-[28px] text-[#6B6B6B] mt-[38px]" data-aos="fade-in" data-aos-delay="250">We’ve helped more than 700 international businesses to achieve their goals and implement state-of-the-art digital solutions. Now we invite you to join the game-changers and create your digital product with us.</p>
                    
                        <div className="mt-[38px] flex justify-between ">
                            {/*
                                font-weight: 400;
                                font-family: "Graphik", sans-serif;
                                font-size: 16px;
                                line-height: 26px;
                                font-style: normal;
                                color: #000;
                                -webkit-font-smoothing: subpixel-antialiased;
                                text-rendering: geometricPrecision;
                                box-sizing: border-box;
                                margin: 0;
                                padding: 0;
                                margin-right: 54px; */}
                            <div className="lg:mr-[54px] lg:h-[8px] w-auto ">
                                <img src="https://fireart.studio/wp-content/themes/fireart/assets/img/expertise/vue-js.svg" alt="Vue.js" loading="lazy" data-aos="fade-in" data-aos-delay="300" className="aos-init aos-animate"></img>
                            </div>
                            <div className="lg:mr-[54px] lg:h-[8px] w-auto ">
                                <img src="https://fireart.studio/wp-content/themes/fireart/assets/img/expertise/react.svg" alt="React" loading="lazy" data-aos="fade-in" data-aos-delay="350" className="aos-init aos-animate"></img>
                            </div>
                            <div className="lg:mr-[54px] lg:h-[8px] w-auto ">
                                <img src="https://fireart.studio/wp-content/themes/fireart/assets/img/expertise/angular.svg" alt="Angular" loading="lazy" data-aos="fade-in" data-aos-delay="400" className="aos-init aos-animate"></img>
                            </div>
                            <div className="lg:mr-[54px] lg:h-[8px] w-auto ">
                                <img src="https://fireart.studio/wp-content/themes/fireart/assets/img/expertise/node-js.svg" alt="Node.js" loading="lazy" data-aos="fade-in" data-aos-delay="450" className="aos-init aos-animate"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise