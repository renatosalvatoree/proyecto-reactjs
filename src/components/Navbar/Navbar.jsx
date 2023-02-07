import Categorias from './Categorias/Categorias';
import SearchBar from './SearchBar/SearchBar';
import RegisterLoginButton from './RegisterLoginButton/RegisterLoginButton'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
        <nav>
        <ul className='nav-bar-superior'>
          <li className='contenedor-logo'>
            <Link to={"/"}><h1>Oddly New</h1></Link>        
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

