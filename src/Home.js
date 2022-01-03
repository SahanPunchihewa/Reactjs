import {useState} from 'react';

const Home = () => {

    const [name, setName] = useState('Sahan');
    const [age, setAge] = useState(24);


    const handleClick = (e) => { // Click Event

        setName('Sahan Punchihewa');
        //console.log('Hello React', e);
    }
    const handleClickAgain = (name, e) => { // Click Event

            console.log('Hello ' + name, e.target); 
    }

    return (  

        <div className="home">

        <h2>HomePage</h2>
        <p>{name} is {age} Years Old</p>
        <button onClick ={handleClick}>Click Me</button> {/* Handle Click function invoke */ }
        <br/>
        <button onClick ={(e)=> handleClickAgain('Sahan', e)}>Click Me Again</button> {/* Handle Click again function invoke */ }

        </div>


    );
}
 
export default Home;