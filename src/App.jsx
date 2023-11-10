import './App.css'
import AllProduk from './pages/AllProduk'
import Beranda from './pages/beranda'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/produk" element={<AllProduk />} />
      </Routes>
    </Router>
  )
}

export default App
