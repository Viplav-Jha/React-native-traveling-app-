import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null,

}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducer :{
        setOrigin:(state , action ) =>{
            state.origin =action.payload;
        },
        setDestination:(state , action ) =>{
            state.destination = action.payload;
        },
        setTravelTimeInformations:(state , action ) =>{ state
            state.travelTimeInformation = action.payload;
        },

    },
});

export const {setOrigin,setDestination,setTravelTime} =
navSlice.actions;

// selector 

export const selectOrigin =(state) =>state.nav.origin;
export const selectDestination =(state) =>state.nav.destination;
export const selectTravelTimeInformation =(state) =>state.nav.travelTimeInformation;

export default navSlice.reducer;














