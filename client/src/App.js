import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/home/Home';
import Detail from './components/Detail';
import NoRute from './components/notFound/noRute';
import IndexAct from './components/actividades/IndexAct';
import BuscarAct from './components/actividades/BuscarAct';
import BorrarAct from './components/actividades/BorrarAct';
import ActualizarAct from './components/actividades/ActualizarAct';
import CrearActividad from './components/actividades/CrearActividad';
import NavBar from './components/nav/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Landing/>}  />
    <Route path='/home' element={<Home/>}  />
    <Route path='/detail' element={<Detail/>} />
    <Route path='/actividad/*' element={<IndexAct/>}>
      <Route path='buscar' element={<BuscarAct/>} />
      <Route path='crear' element={<CrearActividad/>} />
      <Route path='actualizar' element={<ActualizarAct/>} />
      <Route path='borrar' element={<BorrarAct/>} />
    </Route> 
    <Route path='*' element={<NoRute/>} />  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
