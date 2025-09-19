import { BrowserRouter , Routes , Route } from 'react-router-dom';
import App from './pages/app';
import Cursos from './pages/cursos'
import Cadastra from './pages/cadastro';

import NaoEncontrado from './pages/naoencontrado404';

export default function Navegacao() {
 return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={ <App/>} />
      <Route path='/cursos' element={ <Cursos/>} />
      <Route path='/cadastra' element={ <Cadastra/>} />
      
      <Route path='/*' element={ <NaoEncontrado/> } />
      </Routes>
      </BrowserRouter>
 )
}