import React, { useState } from 'react';
import List from './List';
import Input from './Input';

function FruitContainer(props) {
    //normally you declare one hook per each state variable rather than an object
    const [state, setState] = useState({
        //initialize fruit list to the full list
        fruitToDisp: props.fruits,
        //initialize filer to empty
        filter: ''
    });

    /* YOU CAN DEFINE FUNCTION IN FUNCTION IN JS */
    //must assign toa variable
    const handleChange = (e) => {
        e.preventDefault();
        let filterValue = e.target.value.toLowerCase();
        const filteredFruits = props.fruits.filter((fruit) => {
            return fruit.toLowerCase().includes(filterValue);
        });
        setState({
            filter: filterValue,
            fruitToDisp: filteredFruits
        });
    };

    return (
        <div className="Fruit-Container">
            <Input
                value={state.filterValue}
                onChange={(e) => {
                    handleChange(e);
                }}
            />
            <List fruits={state.fruitToDisp} />
        </div>
    );
}

export default FruitContainer;
