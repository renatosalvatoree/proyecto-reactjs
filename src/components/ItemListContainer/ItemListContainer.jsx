import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [productos, setProdictos] = useState([])
    useEffect(() =>{
        fetch('./json/productos.json')
        .then(response => response.json())
        .then(products => 
            const productList = ItemList({products}))
            console.log(productsList)
    }, [])
    return (
        <div>

        </div>
    )
}