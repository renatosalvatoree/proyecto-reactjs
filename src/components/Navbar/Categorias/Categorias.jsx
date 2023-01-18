import React, { Component } from 'react';

class Categorias extends Component {
    render() {
        return (
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
        );
    }
}

export default Categorias;
