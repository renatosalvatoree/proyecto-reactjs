import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categorias extends Component {
    render() {
        return (
        <div className='nav-bar-inferior'>
          <img src={require('./../../images/Icons/shopping-cart.png')}></img>
          1
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <div class="dropdown">
              <a href='#'>CATEGORIES</a>
              <div class="dropdown-content">
                <Link to={"/category/hoodies"}>Hoodies</Link>
                <Link to={"/category/shoes"}>Shoes</Link>
                <Link to={"/category/bottom"}>Bottom</Link>
                <Link to={"/category/others"}>Others</Link>
              </div>
            </div> 
          </li>
          <li>
            <Link to={"/"}>CONTACT</Link>
          </li>
        </ul>
        
        </div>
        );
    }
}

export default Categorias;
