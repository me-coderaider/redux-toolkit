import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: "",
        cars: [],
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            // Assumption, 'action' payload should look like something::
            // action.payload === { name:'adsf', cost:140 }
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        deleteCar(state, action) {
            // Assumption::
            // action.payload === id of the car we want to delete/remove
            const updated = state.cars.filter((car) => {
                return car.id !== action.payload;
            });
            state.cars = updated;
        },
    },
});
// mini-reducers
export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions;
// combined reducer - NOTE -- No 's' after 'reducer'
export const carsReducer = carsSlice.reducer;
