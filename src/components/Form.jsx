import { useRef, useState } from "react"

const Form = ({setId, setHasError}) => {

    const inputRef = useRef()

    const handleInput = (e) => {
        e.preventDefault()
        if(inputRef.current.value.trim().toLowerCase() > 126){
            console.log('Hay un error')
            setHasError(false)
        }else{
            setId(inputRef.current.value)
        }
      }

    return (
        <form onSubmit={handleInput} className="form">
                        <input
                        ref={inputRef}
                        type="number" 
                        />
                        <button type="submit">Search</button>
        </form>
    )
}

export default Form