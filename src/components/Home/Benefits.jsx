import u1 from "../../assets/img/benefits/u1.png";
import u2 from "../../assets/img/benefits/u2.png";
import u3 from "../../assets/img/benefits/u3.png";
import u4 from "../../assets/img/benefits/u4.PNG";
import u5 from "../../assets/img/benefits/u5.PNG";
import u6 from "../../assets/img/benefits/u6.PNG";



function Benefits() {
    const benefits_col = "py-[20px] max-w-[267px] font-normal lg:text-[14px]  leading-[26px]  "

    const benefits_card_icon = "w-[88px] h-[88px]"
    const benefits__card_title = "lg:text-[22px] md:text-[30px] md:mb-[15px] font-[500] leading-[28px] mt-[27px]"
    const benefits__card_desc = "mt-[6px] lg:text-[14px] md:text-[18px] font-normal leadint-[24px]"
    return (
        <section id="benefits" className="pt-[17px] pb-[17px] leading-[20px]">
            <div id="container" className="max-w-[1142px] ">
                <div className="flex-col justify-between lg:inline-flex lg:flex-row" >
                    <h2 id="benefits-h2" className="max-w-[484px] h-auto  lg:pr-[141px] text-[30px] lg:text-[35px] font-semibold leading-[48px]  ">Why should you choose Fireart digital product agency?</h2>
                    <p className="lg:font-extraligth md:font-normal lg:text-[16px] md:text-[18px] leading-[26px] lg:pr-[100px]">Fireart Studio is a boutique digital product design and development studio. We have 50+ JS and design experts on board and 6+ years of experience in building digital projects from scratch or refreshing existing ones.</p>
                </div>
                <div className="max-w-[657px]  md:grid md:grid-cols-2 md:grid-rows-3 md:gap-[120px] p-4 mt-[10px] md:mt-[60px] bg-white">
                    <div className={benefits_col}>
                        <div className="benefits__card" data-aos="fade-in" data-aos-delay="100">
                            <div className={benefits_card_icon}>
                                <img src={u1} className="w-[88px] h-[88px]" alt=""></img>
                            </div>
                            <h3 id="benefits-h3" className={benefits__card_title}>Agile team of JS developers</h3>
                            <p id="benefits__card_desc" className={benefits__card_desc}>Each team in our digital product agency works according to agile methodologies. Thus, we can ensure seamless and efficient development processes. We prioritize transparency, open communication, and collaboration to develop high-quality products that meet your requirements.</p>
                        </div>
                    </div>
                    <div className={benefits_col}>
                        <div className="benefits__card" data-aos="fade-in" data-aos-delay="150">
                            <div className={benefits_card_icon}>
                            <img src={u2} className="w-[88px] h-[88px]" alt=""></img>
                            </div>
                            <h3 className={benefits__card_title}>Focus on JS</h3>
                            <p className={benefits__card_desc} id="benefits__card_desc">Our digital product studio specializes in JavaScript development and ensures that our teams are always up-to-date with the latest industry standards and best practices. We have extensive experience working with JS frameworks and libraries, which lets us create powerful, responsive, and user-friendly digital products.</p>
                        </div>
                    </div>
                    <div className={benefits_col}>
                        <div className="benefits__card" data-aos="fade-in" data-aos-delay="200">
                            <div className={benefits_card_icon}>
                                <img src={u3} className="w-[88px] h-[88px]" alt=""></img>
                            </div>
                            <h3 className={benefits__card_title}>Experienced designers</h3>
                            <p className={benefits__card_desc} id="benefits__card_desc">In Fireart digital product development agency, designers work closely with the development team to create beautiful and functional user interfaces. We employ a user-centered approach that ensures your product's design aligns with your business objectives, brand identity, and target audience &mdash; no wonder we've ranked as 1 of the 10 best design studios on Dribbble.</p>
                        </div>
                    </div>
                    <div className={benefits_col}>
                        <div className="benefits__card" data-aos="fade-in" data-aos-delay="250">
                            <div className={benefits_card_icon}>
                                <img src={u4} className="w-[88px] h-[88px]" alt=""></img>
                            </div>
                            <h3 className={benefits__card_title}>Complex approach</h3>
                            <p className={benefits__card_desc} id="benefits__card_desc">Skilled experts from our digital product company will be with you at every step of product creation. We bring together professional developers, designers, QA specialists, project managers, and illustrators to bring your product to perfection, with each team member using their unique skills and knowledge.</p>
                        </div>
                    </div>
                    <div className={benefits_col}>
                        <div className="benefits__card" data-aos="fade-in" data-aos-delay="300">
                            <div className={benefits_card_icon}>
                                <img src={u5} className="w-[88px] h-[88px]" alt=""></img>
                            </div>
                            <h3 className={benefits__card_title}>Fast project kick-off and easy integration</h3>
                            <p className={benefits__card_desc} id="benefits__card_desc">Years of experience allow us to start and build projects quickly and deliver results fast. We follow a streamlined development process, ensuring that we both create new products and integrate our work seamlessly into your existing business processes.</p>
                        </div>
                    </div>
                    <div className={benefits_col}>
                        <div className="benefits__card" data-aos="fade-in" data-aos-delay="350">
                            <div className={benefits_card_icon}>
                                <img src={u6} className="w-[88px] h-[88px]" alt=""></img>
                            </div>
                            <h3 className={benefits__card_title}>Optimized processes</h3>
                            <p className={benefits__card_desc} id="benefits__card_desc">We continuously optimize our processes to deliver high-quality products while reducing development costs and timelines. We use the latest tools and technologies and keep thorough time-tracking &mdash; you are only charged for the actual hour used for development.</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
 
}

export default Benefits