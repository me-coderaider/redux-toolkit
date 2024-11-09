import { useDispatch, useSelector, shallowEqual } from "react-redux";
// using 'shallowEqual' to avoid warning (Selectors that return a new reference (such as an object or an array) should be memoized:)
// https://stackoverflow.com/questions/67384049/how-exactly-useselector-works
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
    const dispatch = useDispatch();

    // const { name, cost } = useSelector((state) => {
    //     return {
    //         name: state.form.name,
    //         cost: state.form.cost,
    //     };
    // }, shallowEqual);
    // TO AVOID LINE 2 WARNING

    const name = useSelector((state) => state.form.name);
    const cost = useSelector((state) => state.form.cost);

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        // '|| 0' to deal with scenario if we get 'NaN' from parseInt()
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(
            addCar({
                name: name,
                cost: cost,
            })
        );

        //  Option 1 for clearing form-data:: (NOT RECOMMENDED)
        // -> By 'dispatching' multiple functions.
        // dispatch(changeCost(0));
        // dispatch(changeName(""));

        // Option 2 :: better way, by using/adding 'extraReducers' in 'formSlice'
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="input is-expanded"
                            value={cost || ""}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CarForm;
