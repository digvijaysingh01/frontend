---------------------------ALMABETTER CPASTONE FRONTEND FLASHCARD GENERATOR--------------------------------------

Author : DIGVIJAY SINGH

How to start this app ?
    Git clone or download the zip form git, first run 'npm install' to install all the
    dependencies and then run 'npm start' to start the server.
    
    By Default App will start on localhost:3000.

Frontend Technologies used in this project
    1. React JS
    2. React-Router-Dom
    3. React-Redux
    4. Redux Toolkit
    5. NanoId
    6. React-Copy-To-Clipboard
    7. React-icons
    8. React-Share
    9. Formik Library
    10.Yup Library
    11.jsPDF
    12.Tailwind CSS

* The very first page of the app is create flashcard, a form will be displayed to create flashcard.
* The form is made using formik library and has the validation through yup library.
* All the fields are required except images
* Validation on the size of images is also added.
* User is allowed to upload images upto 100kb
* User is allowd to upload one image for the group and one image for the term.
* User can make as much term he/she wants with each group.

* The main reason for adding the validation for the size of the images is because the
    local storage has very limited space of 5MB.

* To make this app useful and functional user is allowed to upload image upto 100KB per image.

* This way app can be used to make upto 20+ flashcards with such limited localstorage of 5MB.

* Once all feilds 'Create & Go...' button can be used to add the flashcard details to the local storage.
* '/myflashcard' page will render after the click on 'Create & Go...' button.

* Since we are using redux here so i have tried to not to use props drilling
    rather we will use useSelector hook to get the state.

* On MyFlashCard page we can see all the flashcards created by the user.

* upon click on a flashcard further it will take you to the FlashCardDetail page,
    where we can check with
    1. All the details of the flashcards.
    2. We will have links to other flashcards also on the left side.
    3. Buttons for share , print , download and team details are available on the right side.

* FlashcardDetails page is rendering three different components in it.
    1.Left component    
    1.Middle component    
    1.Right component    

    . Left Component     --------> To Show links for all other flashcards on the left side
    . Right component    --------> To Show the share , print , download and team button.
    . Middle component   --------> To show all the details regarding the flashcard, which user wants to access.

* To make print and download button functional, jsPDF library has been used
    * For the formating of the pdf page hard coded values are used, but the data
        on the pdf page is puerly dynamic.

* To render the flashcard details on which user clicks, you can use useParams() to get he id from the URL
    and then using filter function we can get the desire flashcard details.

    * For some reason what i did is on user click i am sending id to the redux store and then using filter
        function flashcards are filtered out in the flashcard detail component.

* For validating the formik values, we are using yup library, and the validation schema can
    be found in seprate folder 'validationSchema'                   

* Redux Toolkit is used to create slice and store.
* To make store and slice functional we need to wrap <App/> component in Provider with store

* To call any actions from the store useDispatch() hook is used.
* To get any state from the store useSelector() hook is used.

* Tailwind CSS
    . run npm i -D tailwindcss
    . To configure npm init tailwindcss
    . Then do the recommended changes given on https://tailwindcss.com/docs/installation

* Make sure after configuering the tailwind css your start the server again.    