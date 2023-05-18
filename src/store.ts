import { configureStore } from '@reduxjs/toolkit'
import mainScreenSlice from './state/mainScreenSlice'

export default configureStore({
    reducer: {
        mainScreenSlice: mainScreenSlice
    },
})