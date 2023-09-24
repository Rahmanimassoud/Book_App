
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import LightSwitch from './Pages/LightSwitch/LightSwitch'
import NewBook from './Pages/NewBook/NewBook'
import Library from './Pages/Library/Library'
import SingleBook from './Pages/SingleBook/SingleBook'
import { useEffect, useState } from 'react'

function App() {
  const [lightIsOn, setLightIsOn] = useState(false)


  const [books, setBooks] = useState([])

  useEffect(() => {
    let result = localStorage.getItem('books')
    if(result) {
      setBooks(JSON.parse(result))
    }

  }, [])


  return (
    <div id='app-container'>
      <Sidebar lightIsOn={lightIsOn}/>
      <Routes>
        <Route path="/" element={<LightSwitch lightIsOn={lightIsOn} setLightIsOn={setLightIsOn}/>}/>
        <Route path="/new" element={<NewBook books={books} setBooks={setBooks}/>}/>
        <Route path="/library" element={<Library books={books}/>}/>
        <Route path="/single_book" element={<SingleBook books={books}/>}/>
      </Routes>

    </div>




  )
}

export default App
