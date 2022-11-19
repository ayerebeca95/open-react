import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // useState
 // const [variable, metodo para actializarlo] = useState(valor inicial);
    const [age, setage] = useState(29);

    const birthday = () =>{
        setage(age + 1)
    }

    const birthday2 = () =>{
        setage(age - 1)
    }

    return (
        <div>
        <h1>HOLA {props.name} Desde el componente funcional</h1>
       <h2>Edad es de: {age} </h2>
        <div>
          <button onClick={birthday}>Sumar años</button> <br/>
          <button onClick={birthday2}>Restar años</button>
        </div>
      </div>
    );
};


GreetingF.propTypes = {
name: PropTypes.string
};


export default GreetingF;
