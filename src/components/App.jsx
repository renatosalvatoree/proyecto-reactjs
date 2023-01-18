import './style/App.css';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <h2>You may like...</h2>
      <div class="container">
  <div class="product1"><img src={require('./images/P0.jpg')}></img></div>
  <div class="producto2"><img src={require('./images/P1.jpg')}></img></div>
  <div class="product3"><img src={require('./images/P2.jpg')}></img></div>
  <div class="product4"><img src={require('./images/P3.jpg')}></img></div>
  <div class="product5"><img src={require('./images/P4.jpg')}></img></div>
  <div class="producto6"><img src={require('./images/P5.jpg')}></img></div>
  <div class="product7"><img src={require('./images/P6.jpg')}></img></div>
  <div class="product8"><img src={require('./images/P7.jpg')}></img></div>
  <div class="product9"><img src={require('./images/P8.jpg')}></img></div>
  <div class="product10"><img src={require('./images/P9.jpg')}></img></div>
  <div class="product11"><img src={require('./images/P10.jpg')}></img></div>
  <div class="product12"><img src={require('./images/P11.jpg')}></img></div>
</div>     
    </div> 
  );
}

export default App;
