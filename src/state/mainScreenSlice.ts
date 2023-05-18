import { createSlice } from '@reduxjs/toolkit'

export const initialState: MainSliceState = {
    selectedTabIndex: 0
}

export const mainScreenSlice = createSlice({
    name: 'mainScreenSlice',
    initialState,
    reducers: {
        setSelectedTabIndex: (state: MainSliceState, action) => {
            state.selectedTabIndex = action.payload
        }
    },
})

export const { setSelectedTabIndex } = mainScreenSlice.actions

export default mainScreenSlice.reducer