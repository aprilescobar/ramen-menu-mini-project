import React from 'react';
import ItemCard from '../Components/ItemCard.js';

const TakeOut = ({ MenuItems }) => {
    
    const renderItems = () => MenuItems.filter(item => item.takeOut).map(item =>  <ItemCard key={item.id + Date.now()} item={item}/>)

    return (
        <>
            <h3>Take Out</h3>
            {renderItems()}
        </>
    )
}

export default TakeOut
