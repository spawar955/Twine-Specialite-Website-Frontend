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
import Collection from "./pages/Collection"
import AdminPage from "./pages/AdminPage"
import CollectionForm from "./pages/CollectionForm"
import RemoveCollection from "./pages/RemoveCollection"
import ResinCalculator from "./pages/ResinCalculator"
import MyCart from "./pages/MyCart"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"


// STYLES 
import "./Styles/Header.css"
import "./Styles/Footer.css"
import "./Styles/Home.css"
import "./Styles/Collection.css"
import "./Styles/AdminPage.css"
import "./Styles/ShopNow.css"
import "./Styles/CollectionForm.css"
import "./Styles/RemoveCollection.css"
import "./Styles/ResinCalculator.css"
import "./Styles/MyCart.css"
import "./Styles/Login.css"
import "./Styles/SignUp.css"


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
            <Route path="Collection" element={<Collection/>}/>
            <Route path="AdminPage" element={<AdminPage/>}/>
            <Route path="CollectionForm" element={<CollectionForm/>}/>
            <Route path="RemoveCollection" element={<RemoveCollection/>}/>
            <Route path="ResinCalculator" element={<ResinCalculator/>}/>
            <Route path="MyCart" element={<MyCart/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="SignUp" element={<SignUp/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
