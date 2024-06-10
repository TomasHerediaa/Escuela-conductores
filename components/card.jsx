import React from "react"

const CardPack = ({titulo, texto, duracion, precio}) => {
    return (
        <>
            <div className="containercard__precios" style={{ borderRadius: "15px 15px 0 15px" }}>
                <div className="titulocard__precios">
                    <h3>{titulo}</h3>
                </div>
                <div className="clasesinfo__preciosmain">
                    <div className="clasescard__precios">
                        <h5>{texto}</h5>
                    </div>
                    <div className="duracioncard__precios">
                        <p>{duracion}</p>
                    </div>
                    <div className="preciobtn__precios">
                        <button>{precio}</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CardPack