import "../../global_css.css"
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"
import Wsp from '../../assets/png/Wp.png'
import Footer from '../footer/footer';
import CardPack from "../../../components/card";
import CardPackVIP from "../../../components/cardvip";

function Precios() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <>
                <header className='header--precios'>
                    <nav className="navigation2">
                        <a href="/" className="brand-name logo">
                            TomasDev
                        </a>
                        <button
                            className="hamburger"
                            onClick={() => {
                                setIsNavExpanded(!isNavExpanded)
                            }}
                        >
                            <GiHamburgerMenu className='GiHamburgerMenu'/>
                        </button>
                        <div
                            className={
                                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                            }
                        >
                            <ul className='lista'>
                                <li>
                                    <NavLink to="/">Inicio</NavLink>
                                </li>
                                <li>
                                <NavLink to="/">Nuestra Flota</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Precios">Packs</NavLink>
                                </li>
                                <li>
                                <NavLink to="/">Reseñas</NavLink>
                                </li>
                                <li>
                                <NavLink to="/">Contacto</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            <section className="container__preciosmain">
                <div className="container__precios">
                    <div className="titulo__precioscontainer">
                        <h1 className="tituloprincipal__precios"> PACKS DE CLASES </h1>
                    </div>
                    <div className="containermain__precios">

                        <div className="containercard__preciosmain">
                           <CardPack titulo="PACK BASICO 1" texto="6 Clases Practicas" duracion="(Duración total 3hs)" precio="$68000" />
                           <CardPack titulo="PACK BASICO 2" texto="6 Clases Practicas" duracion="(Duración total 3hs)" precio="$68000" />
                           <CardPack titulo="PACK BASICO 3" texto="6 Clases Practicas" duracion="(Duración total 3hs)" precio="$68000" />
                           <CardPack titulo="PACK BASICO 4" texto="6 Clases Practicas" duracion="(Duración total 3hs)" precio="$68000" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container__preciosmainvip">
                <div className="container__preciosvip">
                    <div className="titulo__precioscontainervip">
                        <h1 className="tituloprincipal__precios"> PACKS DE CLASES <span className='vip'>VIP</span></h1>
                    </div>
                    <div className="containermain__precios">
                        <div className="containercard__preciosmainvip">
                        <CardPackVIP titulo="PACK BASICO 1" texto="6 Clases Practicas" duracion="(Duración total 3hs)" vehiculo="Vehículo para rendir" material="Material y certificado teórico" gestion="Gestión de Tramites" precio="$68000" />
                        <CardPackVIP titulo="PACK BASICO 2" texto="6 Clases Practicas" duracion="(Duración total 3hs)" vehiculo="Vehículo para rendir" material="Material y certificado teórico" gestion="Gestión de Tramites" precio="$68000" />
                        <CardPackVIP titulo="PACK BASICO 3" texto="6 Clases Practicas" duracion="(Duración total 3hs)" vehiculo="Vehículo para rendir" material="Material y certificado teórico" gestion="Gestión de Tramites" precio="$68000" />
                        <CardPackVIP titulo="PACK BASICO 4" texto="6 Clases Practicas" duracion="(Duración total 3hs)" vehiculo="Vehículo para rendir" material="Material y certificado teórico" gestion="Gestión de Tramites" precio="$68000" />
                        </div>
                    </div>
                </div>
            </section>


            <a href="https://wa.me/+53416154648" className='btn-wsp' target='blank'>
                <img className='logo-wsp' src={Wsp} alt="" width={40} />
            </a>

            <Footer />
        </>
    )
}

export default Precios
