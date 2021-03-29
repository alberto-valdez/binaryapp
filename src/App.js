
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [decimal, setDecimal] = useState(0);
  const [resultado, setResultado] = useState('');

  

  async function convertir(d){
    
    let dec = d;
    let residuo;
    let resultado = '';
    let primerDigito = dec%2;
    resultado = primerDigito.toString();
    while(dec>=2){
     dec =  dec/2;
     residuo = dec%2;
     resultado = resultado + Math.floor(residuo);
    }
   let r = resultado.split('').reverse().join('');

    //resumido:  
    // let decimal = parseInt(d);
    // let r = decimal.toString(2)
   setResultado(r);
   return;
   
  }


  return (
    <div className="App">
      <header className="App-header">
        <h3>Convierte un número decimal a binario</h3>
       <input type='number' onChange={e=>{setDecimal(e.target.value)}} placeholder='0'/>
       <button onClick={()=>{convertir(decimal)}}>Convertir</button>
     
       <input type='text' defaultValue={resultado} onChange={e=>{setDecimal(e.target.value)}} placeholder='Representación binaria'/>
  
     
      </header>
    </div>
  );
}

export default App;
