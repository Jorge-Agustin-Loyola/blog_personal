import React from 'react'
import { Link } from 'react-router-dom'

const Prefooter = () => {
    return (
        <section className="relative pt-[93px] pb-[83px] ">

            <div className="w-full mx-auto max-w-[1142px] relative">

                <h2 id="h2_prefooter" className="max-w-[1100px] text-[35px] md:text-[58px] leading-[76px] relative" >Let's make something amazing together<br/>Start by <Link className="text-color_logo underline" href="#popup-contact">saying hi</Link></h2>
            </div>


            <div className="absolute top-0 right-0 z-[-1] w-[500px]">
                <img  src="https://fireart.studio/wp-content/themes/fireart/assets/img/prefooter/palm-leaf.svg" alt="Palm leaf" loading="lazy"></img>
            </div>
        </section>
    )
}

export default Prefooter