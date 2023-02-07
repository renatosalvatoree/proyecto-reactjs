import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { Footer } from './Footer/Footer';
import { WelcomeMessage } from './WelcomeMessage/WelcomeMessage';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<WelcomeMessage/>} />
        <Route path='/'element={<ItemListContainer/>} />
        <Route path='/product/:id' element={<ItemDetailContainer/>} />
        <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
    </Routes>
    
    <Footer/>
    
      
    </BrowserRouter>

    </> 
  );
}

export default App;
