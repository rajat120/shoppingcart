import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css"
import HeaderForm from './HeaderForm';

function Header() {
  return (
    
    <div className="header">
    <div>
   <h3 style={{textAlign:'center', backgroundColor:' rgb(0, 191, 256)'}}> Welcome Shop Easy Offer Zone Top Deals & Discounts</h3>
       </div>
      
       <div>
       <h3>Sign in </h3>
       </div>
   

<div>
    <HeaderForm/>
</div>
   
 </div>
 


    
  )
 
}


export default Header
