import { Grid, GridRow, GridColumn, Image, Segment, Button, Input } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import QTYincre from "../QtyIncre/qtyIncre";
import Review from "../Review/Review"
export default function ProductBioDisplay({product, addReview, removeReview, loggedUser}){
    console.log(product,'this from product bio product')
    return(
    <>


  <Grid columns={2} divided>
    <GridRow stretched>
      <GridColumn width={9}>
        <Segment >
        <Image src={`${product.photoUrl}`}  fluid />
        </Segment>
      </GridColumn>
      <GridColumn width={6}>
        <Segment>
            <h1>{product.productName}</h1>
            <p>Price: { product.newPrice} USD</p>
            <QTYincre/>
            <Button>Add to Cart</Button>
        
        </Segment>
        <Segment>
            <p>Pickup available at 123 street, abc city, CA</p>
            <p>Usually ready in 5 business days</p>
            <Link to="/">View more products</Link>

        </Segment>
      </GridColumn>
      
    </GridRow>
  </Grid>
  <Review loggedUser={loggedUser}/>
  <Grid>
    
  </Grid>



  </>
        
    )}


