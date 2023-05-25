import React, { Component } from 'react';
import { ProductItem } from "./ProductItem";
import { products } from "../Models/productList";
export default class Products extends Component {
    productTitle = "Our Products";
  render() {
    return (
      <div>
            <div className="bg-light p-5 text-center" id="products">
                <h2>{`${this.productTitle}`}</h2>
                <div className="container">
                    <div className="row">
                        {products.map((item) => {
                            return <ProductItem key={item.id} product={item} />;
                        })}
                    </div>
                </div>
                {/* <h2>Gallary</h2>
        <img src="1.jpg" alt="" />
        <img src={x} alt="" /> */}
            </div>
      </div>
    )
  }
}
