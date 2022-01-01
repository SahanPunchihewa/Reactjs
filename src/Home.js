const Home = () => {

    const handleClick = (e) => { // Click Event

        console.log('Hello React', e);
    }
    const handleClickAgain = (name, e) => { // Click Event

            console.log('Hello ' + name, e.target); 
    }

    return (  

        <div className="home">

        <h2>HomePage</h2>
        <button onClick ={handleClick}>Click Me</button> {/* Handle Click function invoke */ }
        <button onClick ={(e)=> handleClickAgain('Sahan', e)}>Click Me Again</button> {/* Handle Click again function invoke */ }

        </div>


    );
}
 
export default Home;