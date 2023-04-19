import React, {useContext} from 'react';
import { Context } from "../store/appContext";


export function Cart() {

    const { store, actions } = useContext(Context);

   return  <button className="btn btn-outline-success me-2" type="button">
    Carrito <span className="badge bg-secondary"><i class="fa fa-shopping-cart pe-2"></i>{store.products.length}</span>
</button>
}