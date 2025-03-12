import { useEffect, useState } from "react"

export const Mostrar = ({nombre})=>{
    const [resultado, setresultado] = useState([])

    const obtenerdatos =async ()=>{
        const respuesta = await fetch("https://restcountries.com/v3.1/name/"+nombre)    
        const datos= await respuesta.json()
        console.log(datos)
        if(datos.status==404){
            alert("no se encontro pais")
            return 
        }
        setresultado(datos)
    }

    useEffect(()=>{
        if(nombre!==""){
            obtenerdatos()
        }
    },[nombre])

    return<>
    {resultado.map((pais,indice)=>{
        return <div key={indice}>
            <h3>{pais.name.common}</h3>
            <img src={pais.flags.png} alt="" />
            <p>{pais.population}</p>
        </div>
    })}
    
    </>

}