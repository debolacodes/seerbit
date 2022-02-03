import {useState} from 'react'

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
function App() {
  const [searchText, setSearchText] = useState("");
  const [numberInCart, setNumberInCart] = useState(0)
  return (
    <div className="">
      <Header 
        setSearchText={setSearchText}
        numberInCart={numberInCart}
      />
      <ProductList searchText={searchText}
        setNumberInCart={setNumberInCart}
      />
      <Footer />
    </div>
  );
}

export default App;
