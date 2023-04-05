import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'Edward Nguyen'},
    { id: '2', name: 'Johny Dee'},
    { id: '3', name: 'Michale Charli'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // TODO: add reducer function here
    }
})

export default usersSlice.reducer;