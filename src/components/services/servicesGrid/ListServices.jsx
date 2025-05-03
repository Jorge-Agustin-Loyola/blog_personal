import React from 'react'
import CardServices from './CardServices'
import { desing_Services, soft_And_Product } from './ArrayServices'

const ListServices = () => {
    return (

        <section name="services" className="bg-[#f3f3f3] pt-[66px] pb-[77px]">

            <div name="container" className="w-full md:mx-auto md:max-w-[1142px]">

                <h2 id="title_services__title" name="title services__title" className="text-[38px] leading-[48px]">Software and Product Development</h2>
               
                <div name="services__row" className="flex flex-col md:flex-row md:flex-wrap w-full  py-[10px] mt-[20px]">
                    {soft_And_Product.map((item, index) => {
                        return (
                            <CardServices
                                key={index}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        )
                    }
                    )
                    }
                </div>

                <h2 id="title_services__title" name="services__title" className=" mt-[80px] text-[38px] leading-[48px]" >Design Services</h2>
                <div name="services__row" className="flex flex-col md:flex-row md:flex-wrap w-full  py-[10px] mt-[20px]">
                    {desing_Services.map((item, index) => {
                        return (
                            <CardServices
                                key={index}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        )
                    }
                    )
                    }
                </div>
            </div>
        </section>
    )
}

export default ListServices