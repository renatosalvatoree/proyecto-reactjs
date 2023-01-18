import Categorias from './Categorias/Categorias';
import SearchBar from './SearchBar/SearchBar';
import RegisterLoginButton from './RegisterLoginButton/RegisterLoginButton'
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
                <nav>
        <ul className='nav-bar-superior'>
          <li className='contenedor-logo'>
            <h1>Oddly New</h1>
          </li>
          <SearchBar />
          <RegisterLoginButton />
        </ul>
        <Categorias />
      </nav>
        );
    }
}

export default Navbar;

