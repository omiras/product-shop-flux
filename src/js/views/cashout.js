import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export function CashOut() {

    const { store, actions } = useContext(Context);

        // Recuperamos todos los productos del almacen 

    const [items, setitems] = useState(store.products);

    // Generamos tantos <li> como producto hay en el array de productos
    return <ul class="list-group">
        {items.map(x => <li class="list-group-item">{x.title} - {x.price} €</li>)}
    </ul>
}