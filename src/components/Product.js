import React from 'react'
import "./Product.css"

export default function Product(props) {
  function addedToCart(productName) {
    alert("'" + productName + "' successfully added to Cart.");
  }
  function addedToFavorites(productName) {
    alert("'" + productName + "' successfully added to Favorites.");
  }
  
  return (
        <div className='Product'>
            <img class="productImage" src={props.img} alt="productImage"/>

            <div className='productInfo'>
              <div className='productName'>{props.itemName}</div>
              <div className='productPrice'>{props.price}</div>
            </div>

            <div className='buttons'>
                <button className='addToCart-btn' onClick={() => addedToCart(props.itemName)}>Add to Cart</button>
                <button className='addToFavorites-btn' onClick={() => addedToFavorites(props.itemName)}>Add to Favorites</button>
            </div>
        </div>
  )
}