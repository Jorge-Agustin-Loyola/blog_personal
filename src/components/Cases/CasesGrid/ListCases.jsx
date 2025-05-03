import React from 'react'
import cases from './ArrayCase'
import CardCase from './CardCase'

function ListCases() {
    return (



        <div name="case_grid" className="pt-[66px] pb-[77px]">

            <div name="container" className="w-full mx-auto max-w-[1142px]">
                <div name="cases-grid__row" className="flex flex-col md:flex-row md:flex-wrap mx-[-5%]" >
                    {cases.map((item, index) => {                    
                        let id_img = "img_" + String(index)
                        let id_title = "title_" + String(index)
                        return (
                            <CardCase
                                key={index}
                                id_image= {id_img}
                                id_title= {id_title}
                                title = {item.title}
                                image= {item.image}
                                tags= {item.tags}
                                description= {item.description}
                            />
                        )

                    })}
                </div>


            </div>
        </div>
    )
}

export default ListCases