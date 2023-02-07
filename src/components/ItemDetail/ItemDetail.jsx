//import {ItemCount} from '../ItemCount/ItemCount'
export const ItemDetail = ({item}) => {
  return (
    <div>
        <img src={`../img/${item.img}`}></img>
        <div className='productInfo'>
            <div>
                <p className='productTitle'>{item.nombre}</p>
                <p className='productSize'>Size: {item.talle}</p>
            </div>
            <p className='productPrice'>${item.precio}</p>
            <p className='view'>Add to cart</p>
        </div>
    </div>
  )
}