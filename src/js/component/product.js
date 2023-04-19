import React, {useContext} from 'react';
import { Context } from "../store/appContext";

export function Product({ price, image, title }) {

    const { store, actions } = useContext(Context);
    

    return <div className="card p-3">
        <div className="text-center">
            <img src={image} width={200} />
        </div>
        <div className="product-details">
            <span className="font-weight-bold d-block fs-2">{price} €</span>
            <h2>{title}</h2>
            <div className="buttons d-flex flex-row">
                <div className="cart">
                    <i className="fa fa-shopping-cart" />
                </div>{" "}
                <button onClick={() => actions.addProduct(title, price)} className="btn btn-success cart-button btn-block">
                    <span className="dot"></span>Add to cart{" "}
                </button>
            </div>
        </div>
    </div>
}