import { createSlice } from "@reduxjs/toolkit";

// The of the initialState is 'flashcards' and value will be checked first if exist and parsed JSON
// Local storage is the storage provided by the web browser which is stored locally
const initialState = {
    flashcards:localStorage.getItem('flashcards') ? 
    JSON.parse(localStorage.getItem('flashcards')) : [],

    showFlash : false,
    modal : false,
    compareId :'',
    urlGroupId : '',
}

// Slices can be created with redux-toolkit only, redux alone is not sufficient
export const flashCardSlice = createSlice({
    name:'flashcard',
    initialState,
    reducers: {
        // When setFlashCard is called, in the state/global store values(entered by the user) will be pushed
        // setFalshCard will be called when user click 'create' button
        setFlashCard(state, action){
            state.flashcards.push({
                card: action.payload,
            })
        // Now values will be added in the local storage for the key 'flashcards' in the initialState
            localStorage.setItem('flashcards',JSON.stringify(state.flashcards));
        },

        // This will change the compare id each time when user clicks a flashcard
        setId(state, action){
            state.compareId = action.payload;
        },

        // This is usefull for conditional rendering of modal component
        setModal(state, action){
            state.modal = !state.modal;
        },

        // We clear all flashcard using localStorage.clear()
        // It will clear localStorage
        deleteFlashcard(state , action){
            localStorage.clear();
        },
        
    },
});

// Actions needs to be exported so that we can use them in different components
export const {setFlashCard, setId, setModal, deleteFlashcard } = flashCardSlice.actions;
// Reducers need to be exported so that we can use it to make redux-store
export default flashCardSlice.reducer;                                  
