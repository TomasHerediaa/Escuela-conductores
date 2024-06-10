import "../../global_css.css"

function Footer() {

  return (
    <>
      <footer className="footer__main">
        <div className="footer__mainfcontainer">
          <div className="logo__main">
            <a href="#" className='logo__footer'>TomasDev.</a>
          </div>
          <div className="lista__footermain">
            <h4 className='lista__footertitulo'>SUCURSAL CENTRO</h4>
            <ul className="lista__footer">
              <li>+54 341 111-1111</li>
              <li>Direccion 1111</li>
              <li>Rosario, Santa fe</li>
            </ul>
          </div>
          <div className="lista__footermain">
            <h4 className='lista__footertitulo'>SUCURSAL NORTE</h4>
            <ul className="lista__footer">
              <li>+54 341 111-1111</li>
              <li>Direccion 1111</li>
              <li>Rosario, Santa fe</li>
            </ul>
          </div>
          <div className="lista__footermain">
            <h4 className='lista__footertitulo'>Horarios de atención</h4>
            <ul className="lista__footer">
              <li>Lunes a Viernes de 9 a 21hs</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}


export default Footer
