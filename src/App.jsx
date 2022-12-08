import React, {useState, useEffect} from 'react';
import "./app.css"

const App = () => {

    const [nmro1, setNmro1] = useState(0)
    const [nmro2, setNmro2] = useState(0)
    const [resultado, setResultado] = useState(0)

    const calcular = () => {
        return parseFloat(nmro1) + parseFloat(nmro2)
    }
    useEffect (()=> {
        setResultado(calcular());
    },[nmro1, nmro2]);


    return (  
        <div className='App'>
          <h1>Soma em react</h1> <br />
          <label>Digite um némero:</label>
          <input
           type="number"
           value={nmro1}
           onChange={(e)=> setNmro1(e.target.value)}/>
           
<br />
          <label>Digite um número:</label>
          <input type="number"
          value={nmro2}
          onChange={(e)=>setNmro2(e.target.value)}/>
<br />
          <label>Resultado:{resultado}</label>
        </div>
    );
}
 
export default App;