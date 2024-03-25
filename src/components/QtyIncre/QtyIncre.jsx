import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

function QTYincre() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Button icon="minus" onClick={handleDecrement} />
      <Input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <Button icon="plus" onClick={handleIncrement} />
    </div>
  );
}

export default QTYincre;