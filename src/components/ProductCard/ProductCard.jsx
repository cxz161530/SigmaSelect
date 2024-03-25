import { Card, Icon, Image, Button } from "semantic-ui-react";

import { Link } from 'react-router-dom';


// this is detail product page
export default function ProductCard({disPro}) {
  return (

    <Card>
     <Image src={`${disPro.photoUrl}`} wrapped ui={false} />
     
      <Card.Content>
        <Card.Description>
        {disPro.productName},
       
        
        
        </Card.Description>

        <Card.Description>
        
       
        {disPro.newPrice}
        
        </Card.Description>
        
            {<Link to = {`/${disPro.productName}`}>
            <Button>
            Details
            </Button>


            </Link>}
            


        
        

    
       
      </Card.Content>

      


     
    </Card>
  );
}
