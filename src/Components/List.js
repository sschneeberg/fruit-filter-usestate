function List(props) {
    const fruitItems = props.fruits.map((fruit, index) => {
        return <li key={'fruit ' + index}>{fruit}</li>;
    });

    return (
        <div className="List">
            <ul>{fruitItems}</ul>
        </div>
    );
}

export default List;
