import React from 'react'

const Achievement = () => {

    return (

        <section className="pt-[60px] pb-[110px]">

            <div className="max-w-[1142px] w-full mx-auto">

                <h2 id="achievementTilte" className="text-[38px] leading-[48px]" data-aos="fade-in" data-aos-delay="50">Our Achievements</h2>

                <div className="flex flex-wrap mt-[60px]">

                    <div className="max-w-[141px] mr-[94px] ml-[-15px]" data-aos="fade-in" data-aos-delay="50">
                        <img className="achievements__item-icon" src="https://fireart.studio/wp-content/themes/fireart/assets/img/achievements/behance.svg" alt="Behance" loading="lazy"></img>
                        <h3 id="achievements__item-title" className="text-center text-[18px] leading-[29px] max-w-[112px] mt-[-8px] mx-auto">28 Behance Galeries</h3>
                    </div>

                    <div className="max-w-[141px] mr-[94px] ml-[-15px]"  >
                        <img className="achievements__item-icon" src="https://fireart.studio/wp-content/themes/fireart/assets/img/achievements/clutch.svg" alt="Clutch" loading="lazy"></img>
                        <h3 className="text-center text-[18px] leading-[29px] max-w-[112px] mt-[-8px] mx-auto" id="achievements__item-title">5.0 Rating on Clutch</h3>
                    </div>

                    <div className="max-w-[141px] mr-[94px] ml-[-15px]"  >
                        <img className="achievements__item-icon" src="https://fireart.studio/wp-content/themes/fireart/assets/img/achievements/dribbble.svg" alt="Dribbble" loading="lazy"></img>
                        <h3 className="text-center text-[18px] leading-[29px] max-w-[112px] mt-[-8px] mx-auto" id="achievements__item-title">Top 3 on Dribbble</h3>
                    </div>
                    
                    <div className="max-w-[141px] mr-[94px] ml-[-15px]"  >
                        <img className="achievements__item-icon" src="https://fireart.studio/wp-content/themes/fireart/assets/img/achievements/clutch.svg" alt="Clutch" loading="lazy"></img>
                        <h3 className="text-center text-[18px] leading-[29px] max-w-[112px] mt-[-8px] mx-auto" id="achievements__item-title">22 reviews on Clutch</h3>
                    </div>

                    <div className="max-w-[141px] mr-[94px] ml-[-15px]"  >
                        <img className="achievements__item-icon" src="https://fireart.studio/wp-content/themes/fireart/assets/img/achievements/verified.svg" alt="Verified" loading="lazy"></img>
                        <h3 className="text-center text-[18px] leading-[29px] max-w-[112px] mt-[-8px] mx-auto" id="achievements__item-title">Verified on Business of Apps</h3>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Achievement

