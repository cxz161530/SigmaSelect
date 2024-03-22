import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";



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
       
      </Card.Content>

      


     
    </Card>
  );
}
