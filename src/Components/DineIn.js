import React from 'react';
import ItemCard from '../Components/ItemCard.js';

const DineIn = ({ MenuItems }) => {

    const renderItems = () => MenuItems.filter(item => item.dineIn).map(item =>  <ItemCard key={item.id + Date.now()} item={item}/>)

    return (
        <>
            <h3>Dine In</h3>
            {renderItems()}
        </>
    )
}

export default DineIn
