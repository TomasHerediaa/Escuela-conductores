import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todojunto from './todojunto.jsx';
import Precios from './componentes/precios/Precios.jsx';


const App = () => {

  return (
    <BrowserRouter>
        {/* <Todojunto /> */}
       <Routes>
       <Route path="/" element={<Todojunto />}/>
        <Route path="/Precios" element={<Precios />}/>
        <Route path="/nosotros" element={<Todojunto />}/>
        <Route path="/reseñas" element={<Todojunto />}/>
        <Route path="/contacto" element={<Todojunto />}/>
       </Routes>
    </BrowserRouter>  
  );
};

export default App;