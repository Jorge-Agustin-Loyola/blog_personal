import React from 'react'

const Case = (props) => {
    const swiper_slide_cases__item = "mr-[30px] w-full"
    const cases__item_body = "w-full  bg-[#fff] rounded-[4px]"
    const cases__item_img = "w-full h-[425px]"
    const cases__item_row = "py-[31px] px-[29px] bg-white"
    const cases__item_tags = "text-[16px] leading-[20px] flex flex-wrap gap-5 font-normal text-[#262626]"
    const cases__item_title = "mt-[6px] text-[24px] leading-[36px] line-clamp-1 "
    return (
        <div className={swiper_slide_cases__item}>
            <a className={cases__item_body} href={props.link}>
                <div className={cases__item_img}>
                    <img className="h-full w-auto" src={props.image} alt="Equine" loading="lazy"></img>
                </div>
                <div className={cases__item_row}>
                    <ul className={cases__item_tags}>
                        {props.tags.map((tag, index) => {
                            return(<li key={index}>{tag}</li>)
                        })}
                    </ul>
                    <h3 className={cases__item_title}>{props.title}</h3>
                </div>
            </a>
        </div>
    )
}

export default Case