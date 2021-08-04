import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'






export default function Home() {
    return (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
           <br></br>
            <Header as="h1" icon textAlign='center'
             style={{ 
                color: 'rgba(215, 225, 235, 1)'}}>
                    <Icon name='users' circular /> <Header.Content> C L I E N T O L O G Y</Header.Content> </Header>
            <Header as='h1' textAlign="center"
            style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>An Online Resource for Managing Your Book Of Business</Header>

        
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
   
        </div>
    )
}
