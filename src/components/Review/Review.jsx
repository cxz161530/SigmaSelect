import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function Review() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };


  return (
    <div>
        <h1>Reviews</h1>

        <Link to = {`/`}>
        <Button >
            Add Review
        </Button>
        </Link>

      

    </div>
  );
}

export default Review;