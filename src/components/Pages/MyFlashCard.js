import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsArrowDownUp } from 'react-icons/bs';
import { deleteFlashcard } from '../flashCardSlicer/flashCardSlice';
import Card from './Card';

const MyFlashCard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const flashcards = useSelector((state) => state.flashcard.flashcards);
  const [showCard, setShowCard] = useState(false);

  //This will set the limit on how many cards should be shown
  const cardLimit = !showCard ? 6 : flashcards.length;

  // To delete all the flashcards
  const deleteAll = () => {
    dispatch(deleteFlashcard());
    navigate('/');
    // we want to reload the page so that it checks with the updated data
    window.location.reload();
  }

  return ( 
    <div className='2xl:ml-[4rem] 2xl:mr-[4rem]'>
      <section className='flex flex-wrap mt-16'>
        {
          // Code below upto line 57 will execulte only if flashcards is not empyt
          flashcards.length > 0 ?(
              <div id='cardContainerDiv' >
                <div className='flex flex-wrap justify-center'>
                  {
                    flashcards.slice(0, cardLimit).map(({ card }, index) => (
                      // Rendering Card component and passing the props 
                      <Card key={index} flashcard={card} /> 
                    ))
                  }
                </div>

                <div className='flex justify-center'>
                  {/* Since we have set the limit of cards to be shown to 6,
                  this button will help user to see other cards also if more than 6 exist*/}

                  <button onClick={() => setShowCard(!showCard)}
                  className='font-medium bg-red-600 text-white p-2 mb-4 rounded-full mt-2
                  hover:bg-red-500'>
                    <BsArrowDownUp />
                  </button>
                  
                  <button className='border border-red-600 px-6 ml-6 rounded-md text-red-600
                  hover:bg-red-600 hover:text-white'
                  onClick={deleteAll}>
                    Delelte All
                  </button>
                </div>
              </div>
            ) : (

              // We are using differetn classe to give gradient type styling to the text
              <div className='bg-white shadow-lg border p-20 display-block m-auto'>
                <div className='sm:flex sm:flex-row flex-wrap'>
                  <div>
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900
                    dark:text-white md:text-5xl lg:text-6xl">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r
                      to-emerald-600 from-sky-400">
                        Nothing Here
                      </span>
                    </h1>
                  </div>
                  
                  {/* We are using differetn classe to give gradient type styling to the button */}
                  <div className='ml-[5rem] flex flex-row justify-center'>
                    <a href="#_" className="relative inline-flex items-center justify-center
                    inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600
                    rounded-lg shadow-2xl group">
                      
                      <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all
                      duration-700 bg-red-500 rounded-full blur-md ease"></span>
                      <span className="absolute inset-0 w-full h-full transition duration-700
                      group-hover:rotate-180 ease">
                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500
                        rounded-full blur-md"></span>
                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500
                        rounded-full blur-md"></span>
                      </span>
                      
                      <span className="relative text-white font-bold text-xl"
                      onClick={() => navigate('/')}>
                        Create Flash Card Now..!
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
        }
      </section>
    </div>
  )
}

export default MyFlashCard;


