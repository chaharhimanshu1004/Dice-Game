
import './App.css';
import Home from './Pages/Home';
import Game from './Pages/Game';
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/game' element={<Game></Game>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
