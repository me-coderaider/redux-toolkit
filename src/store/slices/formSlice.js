import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        cost: 0,
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = "";
            state.cost = 0;
        });
    },
});

// mini-reducers
export const { changeName, changeCost } = formSlice.actions;
// combined reducer - NOTE -- No 's' after 'reducer'
export const formReducer = formSlice.reducer;
