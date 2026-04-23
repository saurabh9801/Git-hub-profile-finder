import { useRef } from "react"

export default function UncontrolledInput(){
    const inputRef = useRef()
    return(
        <>
            <h4>UncontrolledInput</h4>
            <input type="text" ref={inputRef}>
            </input>
        </>
        
    )
}