import React, { Component } from 'react';

class Categorias extends Component {
    render() {
        return (
        <div className='nav-bar-inferior'>
          <img src={require('./../../images/Icons/shopping-cart.png')}></img>
          1
        <ul>
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
        
        </div>
        );
    }
}

export default Categorias;
