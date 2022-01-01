const Home = () => {

    const handleClick = () => { // Click Event

        console.log('Hello React');
    }
    const handleClickAgain = (name) => { // Click Event

            console.log('Hello ' + name); 
    }

    return (  

        <div className="home">

        <h2>HomePage</h2>
        <button onClick ={handleClick}>Click Me</button> // Handle Click function invoke
        <button onClick ={()=> handleClickAgain('Sahan')}>Click Me Again</button> // Handle Click again function invoke

        </div>


    );
}
 
export default Home;