import React from 'react';
import NumberFormat from 'react-number-format';

const ItemCard = ({ item }) => {
    const { name, price, description } = item;

    return (
        <div>
            Name: {name} <br/>
            Price: 
            <NumberFormat
                value={price}
                prefix={'$'}
                displayType={'text'}
                thousandSeparator={true}
                decimalSeparator={'.'}
                decimalScale={2}
                fixedDecimalScale={true}
            /> <br/>
            Description: {description}
            <br/><br/>
        </div>
    )
}

export default ItemCard
