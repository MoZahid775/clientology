
import React from 'react'
import {useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'






export default function Profile(props) {
      //STATE 1
      const[toggled, setToggled] = useState(false)
     

    //   // NOTES DELETION BUTTON
    //   const deleteProHandler = (id) => {
        
    //       // console.log(id)
    //       fetch(`http://localhost:3000/purchases/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //           "Content-type": "application/json",
    //           "authorization": props.user.token
    //       },
    //       })
    //         .then((r) => r.json())
    //         .then((r) => props.deletePurchaseFromState(id));
    //         // props.deleteGameFromState
    //     }
      
    //   //ADD PURCHASE BUTTON
    //   const addNewPurchase = () => {
    //    setToggled(!toggled)
    //    }

console.log(props)



    return (
        <div style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
     <h1 style={{color: 'rgba(250, 250, 255, 1)'}}>Client Profile </h1>
     <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} 
    //  onClick={addNewPurchase}
     >Edit Profile</Button>
    {/* {toggled ? <AddPurchaseForm
     handlePurchaseSubmit={props.handlePurchaseSubmit} 
     clientId={props.clientId}
       />  : null } */}
     {/* {arrayOfComponents} */}
     <Card style={{ 
           backgroundColor: 'rgba(0, 0, 0, 0.9)',
            color: 'rgba(36, 242, 180, 1)',
            width: 500
         }} 
          
          history={props.history} >

        
        <h2>Size</h2>
        <ul>   
         <li>Suit Size: {props.clientProfile[0].suit_size}</li>
         <li>Pant Size: {props.clientProfile[0].pant_size}</li>
         <li>Shirt Size: {props.clientProfile[0].shirt_size}</li>
         <li>Shoe Size: {props.clientProfile[0].shoe_size}</li>
         <li>Height: {props.clientProfile[0].height}</li>
         <li>Style: {props.clientProfile[0].style}</li>
         <li>Dress:</li>
        </ul>

        <h2>Spouse</h2>
        <ul>   
         <li>Name: Eileen</li>
         <li>Pant Size: </li>
         <li>Shirt Size: </li>
         <li>Shoe Size: </li>
         <li>Height: 5'3</li>
         <li>Style: Fashion Forward</li>
         <li>Dress: 3</li>
        </ul>
        
        <h1>First Child</h1>
        <ul>   
         <li>Name: Catherine</li>
         <li>Pant Size: </li>
         <li>Shirt Size: </li>
         <li>Shoe Size: </li>
         <li>Height: </li>
         <li>Style: Kids Clothing</li>
         <li>dress:</li>
        </ul>

        <h1>Second Child</h1>
        <ul>   
         <li>Name: </li>
         <li>Pant Size: </li>
         <li>Shirt Size: </li>
         <li>Shoe Size: </li>
         <li>Height: </li>
         <li>Style:</li>
         <li>dress:</li>
        </ul>

        <h1>Interests</h1>
        <ul>   
         <li>Sports: </li>
         <li>Events:</li>
         <li>Art:</li>
        </ul>






          </Card>
    </div>
    )
}
