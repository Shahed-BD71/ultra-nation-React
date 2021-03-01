import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart, serCart] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleAddedCountry = (country) => {
    console.log("country addd", country)
    const newCart = [...cart, country]
    serCart(newCart);
  }
  return (
    <div className="App">
      <h3>Country Loaded: {countries.length}</h3>
      <h3>Country Added: {cart.length}</h3>
      <Cart cart={cart}></Cart>
        {
          countries.map(country => <Country country={country} handleAddedCountry={handleAddedCountry} key={country.alpha3Code}></Country>)
        }
      



      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
