import React from 'react'

function RandomPost() {
    return (

        <section className="pt-[60px] pb-[45px] bg-[#f3f3f3]">

            <div className=" max-w-[1142px] w-full mx-auto " >

                <h2 id="title_ramdom_post" className="text-[38px] leading-[48px] ">Collection of Practices &amp; Insights</h2>

                <div className="flex flex-col  md:flex-row md:flex-wrap md:mt-[38px] md:mx-[-10px]">

                    <div
                        onMouseEnter={() => {
                            const ramdom_post_title_item = document.getElementById("ramdom_post_title_item");
                            const ramdon_post_img = document.getElementById("ramdon_post_img")

                            ramdom_post_title_item.classList.add("text-color_logo")
                            ramdon_post_img.classList.add("scale-90", "rounded-[5px]")


                        }}
                        onMouseLeave={() => {
                            const ramdom_post_title_item = document.getElementById("ramdom_post_title_item");
                            const ramdon_post_img = document.getElementById("ramdon_post_img")

                            ramdom_post_title_item.classList.remove("text-color_logo")
                            ramdon_post_img.classList.remove("scale-90", "rounded-[5px]")
                        }}

                        className="md:max-w-[50%] w-full px-[10px]"
                    >
                        <a className="" href="">
                            <div id="ramdon_post_col" className="w-full h-[306px] overflow-hidden rounded-[5px]">
                                <img id="ramdon_post_img" className="transition duration-700 ease-in-out w-full h-full object-cover " src="https://fireart.studio/wp-content/uploads/2018/06/1412-1.jpg.webp" alt=""></img>
                            </div>
                            <h3 id="ramdom_post_title_item" className="text-[22px] leading-[28px] md:mt-[44px] transition duration-700 ease-in-out">Best Website Animation Techniques to Enhance Your Web Design</h3>
                        </a>
                    </div>

                    <div
                        onMouseEnter={() => {
                            const ramdom_post_title_item_2 = document.getElementById("ramdom_post_title_item_2");
                            const ramdon_post_img_2 = document.getElementById("ramdon_post_img_2")

                            ramdom_post_title_item_2.classList.add("text-color_logo")
                            ramdon_post_img_2.classList.add("scale-90", "rounded-[5px]")


                        }}
                        onMouseLeave={() => {
                            const ramdom_post_title_item_2 = document.getElementById("ramdom_post_title_item_2");
                            const ramdon_post_img_2 = document.getElementById("ramdon_post_img_2")

                            ramdom_post_title_item_2.classList.remove("text-color_logo")
                            ramdon_post_img_2.classList.remove("scale-90", "rounded-[5px]")
                        }}
                        className="md:max-w-[50%] w-full px-[10px] mt-[15px] md:mt-0">
                        <a className="random-posts__item" href="">
                            <div className="w-full h-[306px] overflow-hidden rounded-[5px]">
                                <img id="ramdon_post_img_2" className="transition duration-700 ease-in-out w-full h-full object-cover " src="https://fireart.studio/wp-content/uploads/2021/03/design.jpeg" alt="" ></img>
                            </div>
                            <h3 id="ramdom_post_title_item_2" className="text-[22px] leading-[28px] md:mt-[44px] transition duration-700 ease-in-out">Top 10 Digital Design Agencies in Eastern Europe</h3>
                        </a>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default RandomPost