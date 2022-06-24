import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function App(){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
   function entrarClick(){
    try{

    }
    catch(err){

    }
  }
  
  return(
    <div className="corpo"> 
        <div> Login </div>
        <input type="text" value={email} onChange={setEmail(e => e.target.value)}/>
        <input type="password" value={senha} onChange={setSenha(e => e.target.value)}/>
        <Link to="/home" onClick={entrarClick}/>
    </div>
  );
}
