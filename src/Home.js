const Home = () => {

    const handleClick = () => {

        console.log('Hello React');

    }

    return (  

        <div className="home">

        <h2>HomePage</h2>
        <button onClick ={handleClick}>Click Me</button>

        </div>


    );
}
 
export default Home;