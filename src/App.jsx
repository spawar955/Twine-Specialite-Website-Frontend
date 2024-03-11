import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

// COMPONENTS 
import Layout from "./components/Layout"
import BreadCrum from "./components/BreadCrum"


// PAGES 
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ShopNow from "./pages/ShopNow"
import BuyNow from "./pages/BuyNow"
import PaymentMethod from "./pages/PaymentMethod"


// STYLES 
import "./Styles/Header.css"
import "./Styles/Footer.css"
import "./Styles/Home.css"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="ShopNow" element={<ShopNow/>}/>
            <Route path="BuyNow" element={<BuyNow/>}/>
            <Route path="PaymentMethod" element={<PaymentMethod/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
