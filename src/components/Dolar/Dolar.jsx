import {useState, useEffect} from 'react'
export const Dolar = () => {
    const [dolar, setDolar] = useState([])

    useEffect(() => {
        fetch('https://criptoya.com/api/dolar') //Consulta a API
        .then(response => response.json()) //Conversion de datos
        .then(dolar => {
            const {blue, oficial, solidario, mep} = dolar  //aca desestructuro el objeto dolar y saco unicamente estos valores que me interesant
            console.log(blue, oficial, solidario, mep)
            const esqueleto = 
            <>
                <p>Dolar Blue: ${blue}</p>
                <p>Dolar Oficial: ${oficial}</p>
                <p>Dolar Solidario: ${solidario}</p>
                <p>Dolar Mep: ${mep}</p>
            </>
            setDolar(esqueleto)
        })

    }, []) //lo que hace es chequear si se modifica el array y frena cuando se modifica
    
    return(
        <div>
            {dolar}
        </div>
    )
}