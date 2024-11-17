import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom'
import Home from './component/home.jsx'
import About from './component/about.jsx'

export default function Root(props) {
  return <BrowserRouter basename="/react-child">
    <div>
      <Link to="/">Home React</Link>
      <Link to="/about">About React</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={< About />} />
    </Routes>
  </BrowserRouter>
}