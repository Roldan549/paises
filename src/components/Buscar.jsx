import { useRef } from "react"

export const Buscar= ({guardarpais})=>{

    const inputRef = useRef ()
    return<>
    
    <input type="text" ref={inputRef} />
    <button onClick={()=>{guardarpais(inputRef.current.value)}} >Buscar Pais</button>

    </>

}