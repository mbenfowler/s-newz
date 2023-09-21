import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Nav } from '../Nav/Nav'
import { Main } from '../Main/Main'
import { Article } from '../Article/Article'
import { Error } from '../Error/Error'
import './App.css'

const App = () => {
  const [selectedArticle, setSelectedArticle] = useState()

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main setSelectedArticle={setSelectedArticle}/>} />
        <Route path='/articles/:id' element={<Article selectedArticle={selectedArticle}/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
