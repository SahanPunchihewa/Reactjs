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

    const [blog, setBlogs] = useState([

            {title: 'My New Website', body: 'Lorem ipsum...', author: 'Sahan', id: 1 },
            {title: 'Welcome to party!', body: 'Lorem ipsum...', author: 'Nilupul', id: 2 },
            {title: 'Web dev top tips', body: 'Lorem ipsum...', author: 'Punchihewa', id: 3 },

    ]);

    return (  

        <div className="home">

        <h2>HomePage</h2>
        <p>{name} is {age} Years Old</p> 
       <button onClick ={handleClick}>Click Me</button>{/* Handle Click function invoke */ } 
        <br/>
      <button onClick ={(e)=> handleClickAgain('Sahan', e)}>Click Me Again</button> {/* Handle Click again function invoke */ } 
        <br/>
        {blog.map ((blog) => (

            <div className="blog-preview" key={blog.id}>

                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>{blog.author}</p>



            </div>

        
        ))}


        </div>




    );
}
 
export default Home;