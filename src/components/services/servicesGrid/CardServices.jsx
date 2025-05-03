import React, {useRef} from 'react'

const CardServices = ({title,description,icon}) => {
    const services__item_link = useRef(null) 
    const services_svg_link = useRef(null)
    return (
       
        <div
            onMouseEnter={()=>{
                if(services__item_link.current && services_svg_link.current){
                    services__item_link.current.classList.add("text-color_logo")
                    services_svg_link.current.classList.add("transform", "translate-x-1")
                }
            }}
            onMouseLeave={()=>{
                if(services__item_link.current && services_svg_link.current){
                    services__item_link.current.classList.remove("text-color_logo")
                    services_svg_link.current.classList.remove("transform", "translate-x-1", )
                }
            }}
        
            name="services__col"  className=" flex w-full lg:max-w-[33.33333%]  lg:px-[10px] mt-[20px]  shadow-lg transition duration-400 ease-linear hover:translate-y-[-5px] hover:shadow-navbar z-1" data-aos="fade-in" data-aos-delay="100"
            
        > 
       
            <a name="services__item" className="flex flex-col w-full bg-[#fff] rounded-[5px] pt-[40px] pb-[70px] px-[40px] " href="#">
       
                <div name="services__item-icon" className="w-[60px] h-[60px]">
                    <img src={icon} alt="Agile Team of JS Programmers" loading="lazy"></img>
                </div>

                <h3 id="services__item-title" name="services__item-title" className="text-[22px] leading-[28px] mt-[40px]">{title}</h3>

                <p name="desc services__item-desc" className="text-[18px] leading-[28px] text-[#81817e] mt-[15px] mb-[25px]">{description}</p>

                <div ref={services__item_link} id="services__item-link" name="services__item-link" className="flex aling-center uppercase mt-auto text-[18px] leading-[18px] transition duration-300 ease-out">Learn more
                    <svg  ref={services_svg_link} className="ml-[10px] w-[20px] h-[15px] transition duration-300 ease-out" fill="currentColor" viewBox="0 0 23 17">
                        <path d="M14.0448 -2.72982e-05L12.5677 1.48488L18.4134 7.37185L0.425781 7.37185L0.425781 9.4781L18.4134 9.4781L12.5572 15.3545L14.0448 16.85L22.4258 8.42497L14.0448 -2.72982e-05Z"></path>
                    </svg>
                </div>
            </a>
        </div>
    )
}

export default CardServices