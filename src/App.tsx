
import './App.css'
import Nav from './components/nav'
import Home from './pages/home'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about'
import NoPage from './pages/noPage'
import Work from './pages/work';
import Contact from './pages/contact';

function App() {


  return (
  <main className='bg-white px-10 md:px-20 lg:px-40'>
    <section className='min-h-screen'>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </section>
  </main>
  )

}

export default App
