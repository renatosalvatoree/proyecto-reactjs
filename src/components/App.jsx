import './style/App.css';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div>
      <nav>
        <ul className='nav-bar-superior'>
          <li className='contenedor-logo'>
            <h1>Oddly New</h1>
          </li>
          <li className='contenedor-searchbar'>
            <input></input>
          </li>
          <li className='contenedor-boton-login-register'>
            <a href='#'>REGISTER</a>
            <a href='#'>LOGIN</a>
          </li>
        </ul>
        <ul className='nav-bar-inferior'>
          <li>
            <a href='#'>HOME</a>
          </li>
          <li>
            <a href='#'>CATEGORIES</a>
          </li>
          <li>
            <a href='#'>BRANDS</a>
          </li>
          <li>
            <a href='#'>DEALS</a>
          </li>
        </ul>
      </nav>
      <Navbar/>
    </div>
    
  );
}

export default App;
