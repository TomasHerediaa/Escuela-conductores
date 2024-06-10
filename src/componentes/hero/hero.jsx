import "../../global_css.css"
import { NavLink } from 'react-router-dom';
import FlechaAbajo from '../../assets/svg/down.svg'
import Wsp from '../../assets/png/Wp.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"






function Hero() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    return (
        <>
            <div className="hero__main">
                <header className='header'>
                    <nav className="navigation">
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
                                    <a href="#container__main"><li>Nuestra flota</li></a>
                                </li>
                                <li>
                                    <NavLink to="/Precios">Packs</NavLink>
                                </li>
                                <li>
                                    <a href="#container__resenas"><li>Reseñas</li></a>
                                </li>
                                <li>
                                    <a href="#contacto__main"><li>Contacto</li></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main className='container__hero' id='container__hero'>
                    <div className="maincontainer__hero">
                        <div className="texto__hero">
                            Maneja seguro  <span className='texto__h1'>Comenza con nosotros.</span>
                        </div>
                        <div className="btn__herocontainer">
                            <button className='btn__hero'>
                                <NavLink to="/Precios">Packs de Clases</NavLink>
                            </button>
                        </div>
                        <div className="flechaAbajo">
                            <a href=""><img src={FlechaAbajo} alt="" /></a>
                        </div>
                    </div>
                </main>

                <a href="https://wa.me/+53416154648" className='btn-wsp' target='blank'>
                    <img className='logo-wsp' src={Wsp} alt="" width={40} />
                </a>
            </div>
        </>
    )
}

export default Hero
