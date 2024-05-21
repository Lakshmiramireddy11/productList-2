
import './App.css';
import logo from './images/logo.png';
import icon from './images/icon.png';
import product from './images/product.png'
import reviews from './images/reviews.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
     <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/"><img src={logo} /></a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/services">Services</a>
          </li>
          <li className="navbar-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-icon">
         <img src={icon} />
        </div>
      </div>
    </nav>
    <div className='Home'>
      <img src={product} />
      <div className='right-bar'>
        <p>shop > product > product details</p>
        <p className='product-name'>Olivient virgin olive oil</p>
         <p className='repees'>  <FontAwesomeIcon icon={faIndianRupeeSign}  /> 320  <sub>(lowest price on amazon )</sub></p>
         <p>Experience the natural nourishment of virgin olive oil for your hair.Rich in anti-oxidantas and</p>
         <p>vitamins,it strengths,softness,and add shine for luscious locks that radiate health and</p>
         <p>vitality.</p>
         <p className='ingredients'> <span>ingredients :</span>Dimethicone,Glycerin,citric acid,Essential oils (Lavendar and Rosemary)</p>
         <p className='quantity'><span>Quantity</span> <span className='ml'>120ml</span> <span className='ml'>240ml</span></p>
         <button className='btn'>purchase the product</button>
         <hr />
         <div className='reviews'>
          <p>Reviews</p>
          <p className='msg'>Write a Review</p>
        </div>
        <div className='reviews'>
        <img src ={reviews} />
        </div>
       
    </div>
    </div>
   
    </div>
  );
}

export default App;
