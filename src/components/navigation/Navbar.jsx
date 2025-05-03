// import { connect } from "react-redux";
import { useState } from "react"
import { NavLink, Link } from "react-router-dom";
import logo_fs from "assets/img/LogoFullStack.PNG"
import loading_dots from "assets/img/loading_dots.gif"
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion"

const menuVariant={
    hidden:{
        opacity:0,
        x:-10,
    },

    visible:{
        opacity:1,
        x:0,
        transition:{
            when:"beforeChildren",
            staggerChildren:0.1,
        }
    },

    exit:{
        opacity:0,
        x:-10,
    },
}

const itemVariant = {
    hidden:{
        opacity:0,
        x:-10
    },
    visible:{
        opacity:1,
        x:0,
    },
}

function Navbar() {

    window.onscroll = function () { scrollFunction() }
    function scrollFunction() {
        if (document.getElementById('navbar')) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            } else {
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');

            }
        }
    }

    const classNavLink = ({ isActive }) => `text-lg inline-flex mx-4 text-sm font-medium leading-6 text-gray-900 ${isActive ? 'underline_custom' : "relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-color_logo "} `

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <nav id="navbar" className="fixed top-0 left-0 w-full py-2  text-black transition duration-500 easy-in-out shadow-navbar z-10 ">
            <div className=" lg:px-4 ">
                <div className="  -mt-2 flex flex-wrap justify-between  px-2 ">
                    <Link to="/" className="m-2">
                        <img src={logo_fs} className="w-20 h-auto rounded-md" />
                    </Link>
                    <div className=" xs:hidden lg:block ml-4 mt-2 flex-shrink-0">
                        <NavLink to="/Cases" className={classNavLink}>Casos</NavLink>
                        <NavLink to="/Services" className={classNavLink}>Servicios</NavLink>
                        <NavLink to="/Blog" className={classNavLink}>Blog</NavLink>
                        <NavLink to="/About_Us" className={classNavLink}>Nosotros</NavLink>
                        <NavLink to="/Contact" className={classNavLink} >Contacto</NavLink>

                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-color_logo px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Hire Us
                            <img src={loading_dots} className="w-8 h-auto pl-3 pt-0.5" />

                        </button>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="xs:block lg:hidden z-10"
                    >

                        {
                            isOpen ? <X /> : <Menu />
                        }

                    </button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div

                                variants = {menuVariant}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                
                                className="relative mt-2 w-screen h-screen bg-white rounded shadow-lg z-9"
                            >
                                <ul className="py-2">
                                   {[ <NavLink onClick={toggleMenu} to="/Cases" className={classNavLink}>Casos</NavLink>,
                                    <NavLink onClick={toggleMenu} to="/Services" className={classNavLink}>Servicios</NavLink>,
                                    <NavLink onClick={toggleMenu} to="/Blog" className={classNavLink}>Blog</NavLink>,
                                    <NavLink onClick={toggleMenu} to="/About_Us" className={classNavLink}>Nosotros</NavLink>,
                                    <NavLink onClick={toggleMenu} to="/Contact" className={classNavLink} >Contacto</NavLink>].map((link,index) =>(

                                        <motion.li
                                            key={index}
                                            variants={itemVariant}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {link}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
// const mapStateToProps = state => ({})

// export default connect(mapStateToProps, null)(Navbar)





