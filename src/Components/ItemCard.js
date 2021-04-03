import React from 'react';
import NumberFormat from 'react-number-format';

const ItemCard = ({ item }) => {
    const { name, price, description, takeOutDes, dineIn
        // imageName
    } = item;

    // let image = `../images/${imageName}.jpeg`

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
            Description: {dineIn ? description : takeOutDes}
            <br/><br/>
            {/* <img src={`../images/Tonkotsu.jpeg`} alt={name} /> */}
        </div>
    )
}

export default ItemCard
