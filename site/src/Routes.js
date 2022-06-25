import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Search/index.js'
import Cadasrtrar from './Cadastrar/index.js'

export default function Index(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/cadastrar" element={<Cadasrtrar />} />
          <Route path="/consulta" element={<Search />} />
        </Routes>
    </BrowserRouter>
  )

}