export default function List(){
    const items = [1,4,3,5,6,9]
    return(
        <>

            {items.filter(item => item % 2 !== 0)
            .map((item,index) =>(
                <ul>
                    
                        <li key={index}>{item}</li>
               
                    
                </ul>

            ))}
        </>
    )
}