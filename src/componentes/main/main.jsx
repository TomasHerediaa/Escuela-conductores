import './main.css'
import IconoAuto from './car.svg'
import IconoInfo from './info.svg'

function Main() {

    return (
        <>
            <section className="container__main" id='container__main'>
                    <div className="tituloprincipal__main">
                        <h2>Nuestra flota</h2>
                    </div>
                <div className="vehiculosinfo__main">
                    <div className="dobleComando__main">
                        <div className="imagen__main">
                            <img src={IconoAuto} alt="" />
                        </div>
                        <div className="texto__main">
                            <h3 className='titulo__main'>Vehiculos doble comando</h3>
                            <p className='parrafo__main'>Todos nuestros vehiculos cuentan con doble comando. Esto te permite conducir de forma segura y supervisada</p>
                        </div>
                    </div>

                    <div className="sensor__main">
                        <div className="imagen__main">
                            <img src={IconoInfo} alt="" />
                        </div>
                        <div className="texto__main">
                            <h3 className='titulo__main'>Sensor de estacionamiento</h3>
                            <p className='parrafo__main'>Este sistema está diseñado para que puedas estacionar el vehiclo de manera sencilla y segura</p>
                        </div>
                    </div>
                </div>

                <div className="info__main">

                </div>
            </section>
        </>
    )
}

export default Main
