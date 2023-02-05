import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Navbar from './Navbar/Navbar';
//import ItemListContainer from './ItemListContainer';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
      <Navbar/>
      <div>
            <p className='mayLike'>You may like these..</p>
        </div>
      
      <div class="container"><ItemListContainer /></div>



<footer>
  <p className='copyright'>All rights reserved 2023 Oddly New SA</p>
</footer>
    </div> 
  );
}

export default App;
