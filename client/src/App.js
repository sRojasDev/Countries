import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from './components/Landing';
import Home from './components/home/Home';
import Detail from './components/Detail';
import NoRute from './components/notFound/noRute';
import IndexAct from './components/actividades/IndexAct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Landing/>}  />
    <Route path='/home' element={<Home/>}  />
    <Route path='/detail' element={<Detail/>} />
    <Route path='/actividad' element={<IndexAct/>}/>
    <Route path='*' element={<NoRute/>}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
