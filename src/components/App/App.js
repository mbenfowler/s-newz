import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Nav } from '../Nav/Nav'
import { Main } from '../Main/Main'
import { Article } from '../Article/Article'
import { Error } from '../Error/Error'
import './App.css'

const App = () => {
  const [selectedArticle, setSelectedArticle] = useState()
  const [query, setQuery] = useState()

  return (
    <>
      <Nav setQuery={setQuery}/>
      <Routes>
        <Route path='/' element={<Main query={query} setSelectedArticle={setSelectedArticle}/>} />
        <Route path='/articles/:id' element={<Article selectedArticle={selectedArticle}/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
