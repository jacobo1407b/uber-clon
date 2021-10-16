import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state: any, action: any) => {
            state.origin = action.payload;
        },
        setDestination: (state: any, action: any) => {
            state.destination = action.payload;
        },
        setTravelTime: (state: any, action: any) => {
            state.travelTimeInformation = action.payload;
        }
    }
});

export const {
    setDestination,
    setOrigin,
    setTravelTime
} = navSlice.actions;
//selectors
export const selectOrigin = (state: any) => state.nav.origin
export const selectDestination = (state: any) => state.nav.destination
export const selectTravelTimeInformation = (state: any) => state.nav.travelTimeInformation

export default navSlice.reducer;