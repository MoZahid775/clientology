import React from 'react'
import {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'








export default function (props) {


         // STATE 1
         const [productName, setProductName]=useState("")

         // STATE 2
         const [size, setSize]=useState("")

         //STATE 3
         const [dateOfPurchase, setDateOfPurchase]=useState("")

         //STATE 4
        const [dollarAmt, setDollarAmt]=useState(0.0)

         //STATE 5
         const [returnIndicator, setReturnIndicator]=useState(false)

  
         let submitHandler = (e) => {
            e.preventDefault()
        
            let formData = { 
                product_name: productName,  
                size: size,
                date_of_purchase: dateOfPurchase,
                dollar_amt: dollarAmt,
                return_indicator: returnIndicator,  
                client_id: props.clientId}    
                props.handlePurchaseSubmit(formData)
                setProductName("")
                setSize("")
                setDateOfPurchase("")
                setDollarAmt(0.0)
                setReturnIndicator(false)
          }
 

          const handleProductName = (e) => {
            setProductName(e.target.value)}
      

          const handleSize = (e) => {
            setSize(e.target.value)}
      

          const handleDateOfPurchase = (e) => {
            setDateOfPurchase(e.target.value)}
      

          const handleDollarAmt = (e) => {
            setDollarAmt(e.target.value)}
      

          const handleReturnIndicator = (e) => {
            setReturnIndicator(e.target.value)}
      





    return (
        <div>
             
            <Form onSubmit={submitHandler} style={{ width: 500}}>
                <br></br>
             <h2 style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Add Client Purchase</h2>
             <Form.Field>
             <label style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Product Name</label>
                 <input 
                 type="text" 
                 autoComplete="off"
                 value={productName}
                 onChange={handleProductName}></input>
             </Form.Field>

             <Form.Field>
             <label style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Size</label>
                 <input 
                 type="text" 
                 autoComplete="off"
                 value={size}
                 onChange={handleSize}></input>
             </Form.Field>

             <Form.Field>
             <label style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Date of Purchase</label>
                 <input 
                 type="text" 
                 autoComplete="off"
                 value={dateOfPurchase}
                 onChange={handleDateOfPurchase}></input>
             </Form.Field>

             <Form.Field>
             <label style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Dollar Amount</label>
                 <input 
                 type="text" 
                 autoComplete="off"
                 value={dollarAmt}
                 onChange={handleDollarAmt}></input>
             </Form.Field>

             <Form.Field>
             <label style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Return Indicator (true/false)</label>
                 <input 
                 type="text" 
                 autoComplete="off"
                 value={returnIndicator}
                 onChange={handleReturnIndicator}></input>
             </Form.Field>
            
               <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}}
           
                type="submit"
                 >Submit Note</Button>
                 <br></br>
             </Form>      
            
        </div>
    )
}
