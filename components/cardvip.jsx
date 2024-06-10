import React from "react"

const CardPackVIP = ({titulo, texto, duracion, vehiculo, material, gestion, precio}) => {
    return (
        <>
                            <div className="containercard__preciosvip" style={{ borderRadius: "15px 15px 0 15px" }}>
                                <div className="titulocard__preciosvip">
                                    <h3>{titulo}</h3>
                                </div>
                                <div className="clasesinfo__preciosmain">
                                    <div className="clasescard__preciosvip">
                                        <h5>{texto}</h5>
                                    </div>
                                    <div className="duracioncard__preciosvip">
                                        <p>{duracion}</p>
                                    </div>
                                    <div className="vehiculocard__precosvip">
                                        <h3>{vehiculo}</h3>
                                    </div>
                                    <div className="materialcard__precovips">
                                        <h3>{material}</h3>
                                    </div>
                                    <div className="tramites__precosvip">
                                        <h3>{gestion}</h3>
                                    </div>
                                    <div className="preciobtn__preciosvip">
                                        <button>{precio}</button>
                                    </div>
                                </div>
                            </div>
        </>
    )

}

export default CardPackVIP