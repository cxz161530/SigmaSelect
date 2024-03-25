import React from 'react'

import { useState, useEffect } from 'react'
import { Grid } from "semantic-ui-react";
import tokenService from '../../utils/tokenService';
import DisplayFeed from '../../components/DisplayFeed/DisplayFeed';
const NewArrival = () => {
    const[displayProduct, setDisplayProduct] = useState([])
    async function getProducts(){
        try {
            //react sent request tp express ask for data inside database
            const response = await fetch(`/api/products?category=NewArrival`,{
                method: "GET",
                /* headers:{
                    Authorization: 'Bearer '+tokenService.getToken()
                }, */
            });
            const data = await response.json()
            //check the data send back from sever in console log
            console.log(data, 'this is data');
            //get the data from react
            setDisplayProduct(data);
            console.log(displayProduct)



        }catch (err){
            console.log(err);
        }
    }

    useEffect(() => {
        // This useEffect is called when the page loads
    
        // Don't forget to call the function
        getProducts();
      }, []);

    return(
        
        <Grid >
            

            <Grid.Row>
                <Grid.Column width={8}>
                    
                    <DisplayFeed displayProduct={displayProduct}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>



    )
}

export default NewArrival