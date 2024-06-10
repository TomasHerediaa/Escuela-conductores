import "../../global_css.css"

function Contacto() {

  return (
    <>
    <div className="contacto__main" id='contacto__main'>
        <div className="tituloprincipal__main">
          <h2>Contactanos</h2>
        </div>
        <div className="form__conteinermain">
        <div className="contactoform__main">
          <div className="form__conteiner">
            <label htmlFor="">Nombre y Apellido</label>
            <input type="text" id='name' placeholder='Nombre y Apellido'/>
          </div>

          <div className="form__conteiner">
            <label htmlFor="">Correo electrónico</label>
            <input type="email" id='name' placeholder='Correo electrónico'/>
          </div>

          <div className="form__conteiner">
            <label htmlFor="">Telefono</label>
            <input type="text" id='name' placeholder='Nombre y Apellido'/>
          </div>

          <div className="form__conteiner">
            <label htmlFor="">¿En que te podemos ayudar?</label>
            <input type="text" id='name' placeholder='Nombre y Apellido'/>
          </div>

          <div className="form__conteiner">
            <label htmlFor="">Consulta</label>
            <input type="text" id='name' placeholder='Consulta'/>
          </div>

          <div className="form__conteiner">
            <button className="form__btn">
              Enviar
            </button>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contacto
