import {BrowserRouter,Routes,Route} from  'react-router-dom'

import './index.css'
import Movie from './Pages/Movie.jsx'
import Subcards from './Pages/Subcards.jsx'
const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
        
        <Route path="/" element={<Movie/>}/>
        <Route path="/subcards" element={<Subcards/>}/>
        
            
        
    </Routes>
    </BrowserRouter>
  )
}
export default App