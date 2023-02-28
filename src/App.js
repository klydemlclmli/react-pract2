import './App.css'
import Product from "./components/Product.js"
import productImages from "./assets/images/index.js"
import Header from "./components/Header.js"

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='App'>
        <Product 
          img={productImages.ben10}
          itemName="Ben 10 Limited Edition Backpack"
          price="Php 16,900.00"
        />
        <Product 
          img={productImages.dora}
          itemName="Dora Collector's Edition Backpack"
          price="Php 11,000.00"
        />
        <Product 
          img={productImages.bean}
          itemName="Mr. Bean Official Backpack"
          price="Php 12,500.00"
        />
        <Product 
          img={productImages.sb}
          itemName="Spongebob Bubble Backpack"
          price="Php 9,000.00"
        />
        <Product 
          img={productImages.perry}
          itemName="Perry The Platypus Backpack"
          price="Php 8,500.00"
        />
        <Product 
          img={productImages.tom}
          itemName="Tom & Jerry Backpack - Tom Ver."
          price="Php 7,500.00"
        />
      </div>
    </div>
  );
}


export default App;
