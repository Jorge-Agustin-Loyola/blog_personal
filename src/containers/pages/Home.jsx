import Cases from "components/Home/cases/cases"
import Header from "components/Home/Header"
import Benefits from "components/Home/Benefits"
import Expertise from "components/Home/expertise"
import Clients from "components/Home/clients"
import Achievement from "components/Home/achievement"
import RandomPost from "components/Home/RandomPost"
import Prefooter from "components/Home/prefooter"
import { Helmet } from "react-helmet-async"

function Home() {
    return (
        <div className="">
            <Helmet>



                <meta name="description" content="Agencia de software y marketing digital Creacion de paginas web y desarrollo de aplicaciones" />
                <meta name="keywords" content="desarrollo web, diseño web, desarrollo de sitios web, aplicaciones web, React, Node.js, HTML5, CSS3, JavaScript, diseño responsive, optimización SEO, desarrollo full stack, páginas web profesionales, landing pages, tiendas online" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="" />
                <meta name="author" content="FullStack" />
                <meta name="publisher" content="FullStack" />

                <meta property="og:title" content="Desarrollo Web Profesional | FullStack" />
                <meta property="og:description" content="Creamos sitios web rápidos, modernos y optimizados para buscadores. Soluciones web a medida con tecnologías como React y Node.js." />
                <meta property="og:image" content="https://tusitio.com/img/preview.jpg" />
                <meta property="og:url" content="https://tusitio.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_ES" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Desarrollo Web Profesional | Mi Empresa" />
                <meta name="twitter:description" content="Creamos sitios web rápidos, modernos y optimizados para buscadores. Soluciones web a medida con tecnologías como React y Node.js." />
                <meta name="twitter:image" content="https://tusitio.com/img/preview.jpg" />
                <meta name="twitter:site" content="@TuCuentaTwitter" />
                <title>FullStack | Home</title>


            </Helmet>


            <div className="py-2 px-2 lg:mx-14  xs:mx-0" style={{ marginTop: "75px" }} >
                <Header />
                <Benefits />
            </div>

            <Cases />

            <div className="py-2 px-2 mx-14  xs:mx-0" >
                <Expertise />
            </div>

            {/* Esto es un separador */}
            <div className="w-full h-[2px] bg-[#eaeaea]"></div>

            <div className="py-2 px-2 mx-14  xs:mx-0" >
                <Clients />
            </div>

            {/* Esto es un separador */}
            <div className="w-full h-[2px] bg-[#eaeaea]"></div>

            <div className="py-2 px-2 mx-14  xs:mx-0" >
                <Achievement />
            </div>

            <RandomPost />
            <Prefooter />

        </div>
    )
}

export default Home



