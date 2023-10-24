
import { Inicio } from './Pages/Inicio';
import { Navbar } from './Components/Home/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error404 } from './Pages/Error404';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='*' element={<Error404/> } />
          </Routes>

        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
