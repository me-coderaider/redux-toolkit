import { useSelector } from "react-redux";

function CarList() {
    const cars = useSelector((state) => {
        // return state.cars.cars; weird, 'cars.cars' because we have defined 'cars' property in the 'cars' slice
        // So, to avoid the confusion, we'll change the 'cars' property.
        // return state.cars.cars;

        return state.cars.data;
    });

    const handleDelete = (car) => {};

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
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
