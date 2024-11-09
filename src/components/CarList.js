import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from "../store";
import { createSelector } from "@reduxjs/toolkit";

// using 'shallowEqual' or 'creatorSelector' to avoid warning (Selectors that return a new reference (such as an object or an array) should be memoized:)
// https://stackoverflow.com/questions/67384049/how-exactly-useselector-works
const memoizedCars = createSelector(
    [(state) => state.cars.data, (state) => state.cars.searchTerm],
    (data, searchTerm) =>
        data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
);
function CarList() {
    const dispatch = useDispatch();

    // const cars = useSelector((state) => {
    // const {cars,name} = useSelector(({ form, cars: { data, searchTerm } }) => {
    //     /*
    //     // return state.cars.cars; weird, 'cars.cars' because we have defined 'cars' property in the 'cars' slice
    //     // So, to avoid the confusion, we'll change the 'cars' property.
    //     // return state.cars.cars;

    //     // return state.cars.data;
    //     */

    //     // filtering search logic
    //     const filteredCars= data.filter((car) =>
    //         car.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // return {
    //     cars:filteredCars,
    //     name:form.name
    // }
    // }, shallowEqual);

    const cars = useSelector(memoizedCars);
    const name = useSelector((state) => state.form.name);

    const handleDelete = (car) => {
        dispatch(deleteCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        // DECIDE IF THIS CAR SHOULD BE BOLD and we still rely on the 'useSelector' again.
        // state.form.name
        const bold =
            name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && "bold"}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleDelete(car)}
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars} <hr />
        </div>
    );
}

export default CarList;
