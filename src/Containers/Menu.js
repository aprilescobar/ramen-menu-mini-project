import React, { useState} from 'react';
import DineIn from '../Components/DineIn.js';
import TakeOut from '../Components/TakeOut.js';
import MenuItems from '../MenuItems.js';

const Menu = () => {

    const [dineIn, setDineIn] = useState(true);

    const renderDineIn = () => <DineIn MenuItems={MenuItems} />
    const renderTakeOut = () => <TakeOut MenuItems={MenuItems} />

    return (
        <div id="menu">
            <h2>Menu</h2>
            <button onClick={() =>setDineIn(true)}>Dine In</button>            
            <button onClick={() =>setDineIn(false)}>Take Out</button>   

            {dineIn ? renderDineIn() : renderTakeOut()}        
        </div>
    )
}

export default Menu
