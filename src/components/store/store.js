import {configureStore} from '@reduxjs/toolkit';
import cardReducer from '../flashCardSlicer/flashCardSlice';

// Since flashCradSlice.reducer is an export default, so we can name it as cardReducer
const store = configureStore({
    reducer : {
        flashcard : cardReducer,
    }
});

export default store ;