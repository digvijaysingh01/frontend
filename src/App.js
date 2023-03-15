import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/Pages/Topbar';
import HomePage from './components/Pages/HomePage';
import CreateFlashCard from './components/Pages/CreateFlashCard';
import MyFlashCard from './components/Pages/MyFlashCard';
import FlashCardDetails from './components/Pages/FlashCardDetails';

function App() {

  return (
    <div className='w-full h-screen bg-orange-50/40'>
      <div>
        <BrowserRouter>
        {/* We need Topbar and HomePage component out of Routes so that they can render every where */}
        <Topbar />
        <HomePage />
        {/* The different components of app are in routes with specified paths */}
          <Routes>
            <Route path='/' element={<CreateFlashCard />} />
            <Route path='/myflashcard' element={<MyFlashCard />} />
            <Route path='/flashcarddetails/:groupId' element={<FlashCardDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
