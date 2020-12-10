import React, { useState } from 'react';
import List from './List';
import Input from './Input';

function FruitContainer(props) {
    const [state, setState] = useState({
        //initialize fruit list to the full list
        fruitToDisp: props.fruits,
        //initialize filer to empty
        filter: ''
    });

    return (
        <div className="Fruit-Container">
            <Input
                value={state.filterValue}
                onChange={(e) => {
                    e.preventDefault();
                    let filterValue = e.target.value.toLowerCase();
                    const filteredFruits = props.fruits.filter((fruit) => {
                        return fruit.toLowerCase().includes(filterValue);
                    });
                    setState({
                        filter: filterValue,
                        fruitToDisp: filteredFruits
                    });
                }}
            />
            <List fruits={state.fruitToDisp} />
        </div>
    );
}

export default FruitContainer;
