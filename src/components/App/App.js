import { Routes, Route } from 'react-router-dom'
import { Nav } from '../Nav/Nav'
import { Main } from '../Main/Main'
import { Article } from '../Article/Article'
import { Error } from '../Error/Error'
import './App.css'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
