import React from 'react'
import {useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import AddPurchaseForm from './AddPurchaseForm';




export default function Purchase(props) {
 //STATE 1
 const[toggled, setToggled] = useState(false)


// NOTES DELETION BUTTON
const deletePurchaseHandler = (id) => {
  
    // console.log(id)
    fetch(`http://localhost:3000/purchases/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "authorization": props.user.token
    },
    })
      .then((r) => r.json())
      .then((r) => props.deletePurchaseFromState(id));
      // props.deleteGameFromState
  }

//ADD PURCHASE BUTTON
const addNewPurchase = () => {
    setToggled(!toggled)
  }

console.log(props)

  let arrayOfComponents = props.clientPurchases.map(purchaseObj => {
    return (
          <Card style={{ 
           backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: 'rgba(36, 242, 180, 1)',
            width: 500
         }} 
          key={purchaseObj.id} 
          history={props.history} >
                 <div class="content">
      
                       <div class="header" style={{color: 'rgba(36, 242, 180, 1)'}}>
                       {purchaseObj.date_of_purchase}
                       </div>
                            <div class="meta" style={{color: 'rgba(36, 242, 180, 1)'}}>
                            ${purchaseObj.dollar_amt}
                            </div>
                 </div>
        <ul>   
         <li>Product Name: {purchaseObj.product_name}</li>
         <li>Size: {purchaseObj.size}</li>
         <li>Return Indicator: false</li>
        </ul>

        <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}}  onClick={() => {deletePurchaseHandler(purchaseObj.id)}}>Delete</Button>   
          </Card>
    )})



    return (
       
            <div style={{ 
                     backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <h1 style={{color: 'rgba(250, 250, 255, 1)'}}>Purchase History </h1>
            <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} onClick={addNewPurchase}>Add a New Purchase</Button>
            {toggled ? <AddPurchaseForm
            handlePurchaseSubmit={props.handlePurchaseSubmit} 
            clientId={props.clientId}
                />  : null }
            {arrayOfComponents}
        </div>
    )
}
