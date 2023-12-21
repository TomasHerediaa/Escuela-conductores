import './Precios.css'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"
import Wsp from './Wp.png'
import Footer from '../footer/footer';

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
                        <h1 className="tituloprincipal__precios"> Packs de clases </h1>
                    </div>
                    <div className="containermain__precios">

                        <div className="containercard__preciosmain">
                            <div className="containercard__precios">
                                <div className="titulocard__precios">
                                    <h3>PACK BASICO 1</h3>
                                </div>
                                <div className="clasesinfo__preciosmain">
                                    <div className="clasescard__precios">
                                        <h5>6 Clases Practicas</h5>
                                    </div>
                                    <div className="duracioncard__precios">
                                        <p>(Duración total 3hs)</p>
                                    </div>
                                    <div className="preciobtn__precios">
                                        <button>$68000</button>
                                    </div>
                                </div>
                            </div>

                            <div className="containercard__precios">
                                <div className="titulocard__precios">
                                    <h3>PACK BASICO 2</h3>
                                </div>
                                <div className="clasesinfo__preciosmain">
                                    <div className="clasescard__precios">
                                        <h5>6 Clases Practicas</h5>
                                    </div>
                                    <div className="duracioncard__precios">
                                        <p>(Duración total 3hs)</p>
                                    </div>
                                    <div className="preciobtn__precios">
                                        <button>$68000</button>
                                    </div>
                                </div>
                            </div>

                            <div className="containercard__precios">
                                <div className="titulocard__precios">
                                    <h3>PACK BASICO 3</h3>
                                </div>
                                <div className="clasesinfo__preciosmain">
                                    <div className="clasescard__precios">
                                        <h5>6 Clases Practicas</h5>
                                    </div>
                                    <div className="duracioncard__precios">
                                        <p>(Duración total 3hs)</p>
                                    </div>
                                    <div className="preciobtn__precios">
                                        <button>$68000</button>
                                    </div>
                                </div>
                            </div>

                            <div className="containercard__precios">
                                <div className="titulocard__precios">
                                    <h3>PACK BASICO 4</h3>
                                </div>
                                <div className="clasesinfo__preciosmain">
                                    <div className="clasescard__precios">
                                        <h5>6 Clases Practicas</h5>
                                    </div>
                                    <div className="duracioncard__precios">
                                        <p>(Duración total 3hs)</p>
                                    </div>
                                    <div className="preciobtn__precios">
                                        <button>$68000</button>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>

            <section className="container__preciosmainvip">
                <div className="container__preciosvip">
                    <div className="titulo__precioscontainervip">
                        <h1 className="tituloprincipal__precios"> Packs de clases <span className='vip'>VIP</span></h1>
                    </div>
                    <div className="containermain__precios">

                        <div className="containercard__preciosmainvip">
                            <div className="containercard__preciosvip">
                                <div className="titulocard__preciosvip">
                                    <h3>PACK PREMIUM 1</h3>
                                </div>
                                <div className="clasesinfo__preciosmain">
                                    <div className="clasescard__preciosvip">
                                        <h5>6 Clases Practicas</h5>
                                    </div>
                                    <div className="duracioncard__preciosvip">
                                        <p>(Duración total 3hs)</p>
                                    </div>
                                    <div className="vehiculocard__precosvip">
                                        <h3>Vehículo para rendir</h3>
                                    </div>
                                    <div className="materialcard__precovips">
                                        <h3>Material y certificado teórico</h3>
                                    </div>
                                    <div className="tramites__precosvip">
                                        <h3>Gestión de Tramites</h3>
                                    </div>
                                    <div className="preciobtn__preciosvip">
                                        <button>$68000</button>
                                    </div>
                                </div>
                            </div>

                            <div className="containercard__preciosvip">
                                <div className="titulocard__preciosvip">
                                    <h3>PACK PREMIUM 2</h3>
                                </div>
                                <div className="clasesinfo__preciosmain">
                                    <div className="clasescard__preciosvip">
                                        <h5>6 Clases Practicas</h5>
                                    </div>
                                    <div className="duracioncard__preciosvip">
                                        <p>(Duración total 3hs)</p>
                                    </div>
                                    <div className="vehiculocard__precosvip">
                                        <h3>Vehículo para rendir</h3>
                                    </div>
                                    <div className="materialcard__precovips">
                                        <h3>Material y certificado teórico</h3>
                                    </div>
                                    <div className="tramites__precosvip">
                                        <h3>Gestión de Tramites</h3>
                                    </div>
                                    <div className="preciobtn__preciosvip">
                                        <button>$68000</button>
                                    </div>
                                </div>
                            </div>

                            <div className="containercard__preciosvip">
                                <div className="titulocard__preciosvip">
                                    <h3>PACK PREMIUM 3</h3>
                                </div>
                                <div className="clasesinfo__preciosmain">
                                    <div className="clasescard__preciosvip">
                                        <h5>6 Clases Practicas</h5>
                                    </div>
                                    <div className="duracioncard__preciosvip">
                                        <p>(Duración total 3hs)</p>
                                    </div>
                                    <div className="vehiculocard__precosvip">
                                        <h3>Vehículo para rendir</h3>
                                    </div>
                                    <div className="materialcard__precovips">
                                        <h3>Material y certificado teórico</h3>
                                    </div>
                                    <div className="tramites__precosvip">
                                        <h3>Gestión de Tramites</h3>
                                    </div>
                                    <div className="preciobtn__preciosvip">
                                        <button>$68000</button>
                                    </div>
                                </div>
                            </div>

                            <div className="containercard__preciosvip">
                                <div className="titulocard__preciosvip">
                                    <h3>PACK PREMIUM 4</h3>
                                </div>
                                <div className="clasesinfo__preciosmain">
                                    <div className="clasescard__preciosvip">
                                        <h5>6 Clases Practicas</h5>
                                    </div>
                                    <div className="duracioncard__preciosvip">
                                        <p>(Duración total 3hs)</p>
                                    </div>
                                    <div className="vehiculocard__precosvip">
                                        <h3>Vehículo para rendir</h3>
                                    </div>
                                    <div className="materialcard__precovips">
                                        <h3>Material y certificado teórico</h3>
                                    </div>
                                    <div className="tramites__precosvip">
                                        <h3>Gestión de Tramites</h3>
                                    </div>
                                    <div className="preciobtn__preciosvip">
                                        <button>$68000</button>
                                    </div>
                                </div>
                            </div>
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
