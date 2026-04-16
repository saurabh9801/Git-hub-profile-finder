function Two(){
    const img = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';
    const description = "This is demo";
    const name ="saurabh"
    return(
        <>
        <h1>Hi,This is {name} Kumar</h1>
        <img src={img} alt={description}>
        </img>
        </>
    )

}
export default Two;
