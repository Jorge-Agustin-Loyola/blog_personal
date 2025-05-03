import React, { useRef } from 'react';

function CardCase({ id_img, id_title, title, image, tags = [], description }) {
    const imgRef = useRef(null);
    const titleRef = useRef(null);

    return (
        <div
            className="w-full md:max-w-[50%] p-[5%] mt-[15px]  "
            onMouseEnter={() => {
                if (titleRef.current && imgRef.current) {
                    titleRef.current.classList.add("text-color_logo");
                    imgRef.current.classList.add("scale-90", "rounded-[5px]");
                }
            }}
            onMouseLeave={() => {
                if (titleRef.current && imgRef.current) {
                    titleRef.current.classList.remove("text-color_logo");
                    imgRef.current.classList.remove("scale-90", "rounded-[5px]");
                }
            }}
        >
            <a name="cases-grid__item" className="" href="#">
                <div name="cases-grid__item-img" className="w-full md:h-[501px] overflow-hidden rounded-[5px]">
                    <div>
                        <img ref={imgRef} id={id_img} src={image} alt={title} className="transition duration-700 ease-in-out w-full h-full object-cover " loading="lazy" />
                    </div>
                </div>  
                <ul id="cases-grid__item-tags" name="cases-grid__item-tags" className="flex flex-wrap leading-[24px] text-[16px] mt-[40px]">
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
                <h3 ref={titleRef} id={id_title} className="text-[20px] leading-[38px]  md:text-[38px] font-bold md:leading-[48px] mt-[10px] transition duration-700 ease-in-out">
                    {title}
                </h3>
                <p name="desc cases-grid__item-desc" className="mt-[25px] leading-[28px] text-[18px] text-[#81817e]">
                    {description}
                </p>
            </a>
        </div>
    );
}

export default CardCase;


