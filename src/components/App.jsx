import './style/App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer';
function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer TextoBienvenida = {"You may like these..."}/>
      <div class="container">
  <div class="product1">
    <img src={require('./images/Clothes/P0.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
  </div>
  <div class="producto2">
    <img src={require('./images/Clothes/P1.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="product3">
    <img src={require('./images/Clothes/P2.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="product4">
    <img src={require('./images/Clothes/P3.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="product5">
    <img src={require('./images/Clothes/P4.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="producto6">
    <img src={require('./images/Clothes/P5.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="product7">
    <img src={require('./images/Clothes/P6.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="product8">
    <img src={require('./images/Clothes/P7.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="product9">
    <img src={require('./images/Clothes/P8.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="product10">
    <img src={require('./images/Clothes/P9.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="product11">
    <img src={require('./images/Clothes/P10.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
  <div class="product12">
    <img src={require('./images/Clothes/P11.jpg')}></img>
    <div className='productInfo'>
      <div>
      <p className='productTitle'>Adidas Hoodie</p>
      <p className='productSize'>Size M</p>
      </div>
      <p className='productPrice'>$60</p>
      <p className='view'>View</p>
    </div>
    </div>
</div>

<footer>
  <p className='copyright'>All rights reserved 2023 Oddly New SA</p>
</footer>
    </div> 
  );
}

export default App;
