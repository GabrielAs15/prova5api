import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login/index.js'

export default function Index(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/consulta"/>
        </Routes>
    </BrowserRouter>
  )
}


