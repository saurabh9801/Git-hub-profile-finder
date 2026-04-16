export default function CssStyle(){
     // how i can access via object
        const person = {
            name: 'Gregorio Y. Zara',
            theme: {
                backgroundColor: 'aqua',
                color:"#E00000"
            }
        };
    return(
        <>
        <ul style={{background:"black", color:"pink"}}>
            <li>dssdsa</li>
            <li>jfjjffhfj</li>
            <li>uqwueyqweuuqw</li>

        </ul>
        <div style={person.theme}>
            <h1>Hi,{person.name}</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>

        </div>

       
        </>
    )
}