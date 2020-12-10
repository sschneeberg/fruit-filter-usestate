function Input(props) {
    return (
        <div className="Input">
            <label htmlFor="fruit-filter">Filter these fruits: </label>
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                name="fruit-filter"
            />
        </div>
    );
}

export default Input;
