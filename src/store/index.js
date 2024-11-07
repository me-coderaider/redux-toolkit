import { configureStore } from "@reduxjs/toolkit";

import {
    carsReducer,
    addCar,
    deleteCar,
    changeSearchTerm,
} from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer,
    },
});

export { store, changeName, changeCost, addCar, deleteCar, changeSearchTerm };
