import React from 'react';
import ItemCard from '../Components/ItemCard.js';
import MenuItems from '../MenuItems.js';

const Menu = () => {

    const renderItems = () => MenuItems.map(item => item.dineIn && <ItemCard key={item.id + Date.now()} item={item}/>)

    return (
        <div>
            Menu
            {renderItems()}
        </div>
    )
}

export default Menu
