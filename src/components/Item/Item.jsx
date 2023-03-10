import { Button } from "bootstrap"
import { Link } from "react-router-dom"
export const Item = ({item}) => {
    return (        
    <div class={item.idHTML}>
        <img src={`../img/${item.img}`}></img>
        <div className='productInfo'>
            <div>
                <p className='productTitle'>{item.nombre}</p>
                <p className='productSize'>Size: {item.talle}</p>
            </div>
            <p className='productPrice'>${item.precio}</p>
            <p className='view'><Link to={`/item/${item.id}`}>View</Link></p>
        </div>
    </div>
    )
}

