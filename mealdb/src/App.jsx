
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Mainpage from './components/Mainpage'
import Mealinfo from './components/Mealinfo'

function App() {

  return (
    <div>
   
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealId' element={<Mealinfo/>}/>
    </Routes>
    </div>
  )
}

export default App
