import React from "react";
import {useState} from 'react'
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";



// const PaymentMethod = () =>  {
//   const [selected,setSelected] = useState(null)
//   const toggle = (i) =>{
//       if(selected === i){
//          return setSelected(null)
//       }
      
//       setSelected(i)
//   }
  
//   return (
//     <>
//         <div className="payments-methods-page py-5">

//           {/* <div className="payments-address" onClick={toggle(i)}>
//               <div className="payments-sub-title"><div>1. Select a delivery address</div></div>
//               <div className="form-check">
//                   <input className="form-check-input" type="checkbox"></input>
//                   <label className="form-check-label" for=""> In Stock</label>
//               </div>
//               <div className="form-check">
//                   <input className="form-check-input" type="checkbox"></input>
//                   <label className="form-check-label" for=""> Out of Stock</label>
//               </div>
//           </div> */}
//           <div className="payments-select-method" onClick={toggle(1)}>
//               <div className="payments-sub-title">
//                 <div>2. Select a payment method</div>
//                 <span>{selected === i ? '-' : '+'}</span>
//               </div>
//               <div 
//                 className={
//                   selected === i ? 'payments-form show' : 'payments-form'
//                 }>
//                 <div className="form-check">
//                     <input className="form-check-input" type="checkbox"></input>
//                     <label className="form-check-label" for=""> In Stock</label>
//                 </div>
//                 <div className="form-check">
//                     <input className="form-check-input" type="checkbox"></input>
//                     <label className="form-check-label" for=""> Out of Stock</label>
//                 </div>
//               </div>  
//           </div>
//           <div className="payments-confirm-items" onClick={toggle(i)}>
//           </div>
//         </div>
//     </>
//   );
// }
const PaymentMethod = () =>  {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } 
    else {
      setSelected(i);
    }
  };

  return (
    <>
      <div className="payments-methods-page py-5">
        {/* <div className="payments-address" onClick={toggle(1)}>
              <div className="payments-sub-title">
                <div>1. Select a delivery address</div>
                <span>{selected === 1 ? '-' : '+'}</span>
              </div>
              <div className={selected === 1 ? 'payments-form show' : 'payments-form'}>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor=""> In Stock</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" htmlFor=""> Out of Stock</label>
                </div>
              </div> 
        </div>  */}
        <div className="payments-address" onClick={() => toggle(1)}>
          <div className="payments-sub-title">
            <div>1. Select a delivery Address</div>
            <span>{selected === 1 ? '-' : '+'}</span>
          </div>
          <div 
            className={
              selected === 1 ? 'payments-form show' : 'payments-form'
            }
          >
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor=""> B803, Aishwaryam Courtyard, Akurdi, Chikhali Road, Chinchwad, PUNE, MAHARASHTRA, 411062, India</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="">At Post- Gondawale Bk, Tal-Man, District - Satara, SATARA, MAHARASHTRA, 415540, India</label>
            </div>
          </div>  
        </div>
        <div className="payments-select-method" onClick={() => toggle(2)}>
          <div className="payments-sub-title">
            <div>2. Select a payment method</div>
            <span>{selected === 2 ? '-' : '+'}</span>
          </div>
          <div 
            className={
              selected === 2 ? 'payments-form show' : 'payments-form'
            }
          > 
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor=""> Credit or Debit Card </label>
            </div>
              <div><img src="images/payments.png" ></img></div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor=""> Net Banking</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor=""> UPI</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor=""> Cash On Delivery</label>
            </div>
          </div>  
        </div>
        <Link className="button" to={"/PaymentMethod"} >Place Your Order</Link>
        
      </div>
    </>
  );
};


export default PaymentMethod;
