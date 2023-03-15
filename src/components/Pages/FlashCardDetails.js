import '../styles/FlashCardDetails.css';
import { useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import LeftComponent from '../SingleCard\'sComponent/LeftComponent';
import MiddleComponent from '../SingleCard\'sComponent/MiddleComponent';
import RightComponent from '../SingleCard\'sComponent/RightComponent';
import ModalShare from '../Modal/ModalShare';
import { useNavigate } from 'react-router-dom';

const FlashCardDetails = () => {
  const navigate = useNavigate();

  // Get flashcards from the store
  const flashcards = useSelector((state) => state.flashcard.flashcards);

  // filter flahcard on which user clicks
  const compareId = useSelector((state) => state.flashcard.compareId);

  // filtered Card will have only one object element at a time
  const filteredCard = flashcards.filter(ele => ele.card.groupid === compareId);

  // This will help us to use conditional rendering for modal component
  const modal = useSelector((state) => state.flashcard.modal);

  return (
    <div className='md:ml-12 sm:ml-6'>
      <section className='flex flex-col text-slate-6000'>
        <header className='flex'>
  
          <BiArrowBack className='text-3xl mr-6 cursor-pointer'
            id='backArrow' onClick={() => navigate(-1)} />
          
          <div className='flex flex-col'>
            <h2 className='text-xl text-black font-bold'>
              {filteredCard[0].card.groupName}
            </h2>
            
            <p className='my-2'>
              {(filteredCard[0].card.description).slice(0,100)}...
            </p>
          </div>
  
        </header>
      </section>

      <div className='flex justify-around mt-2'
      id='componentDiv'>
          <div className='bg-white drop-shadow-lg space-y-4 h-[25rem] rounded-md mr-1 w-[20%]'
          id='leftComponentDiv'>
            <LeftComponent filteredCard={filteredCard} />
          </div>

          <div className='bg-white drop-shadow-lg space-y-4 rounded-md ml-1 mr-1 mb-4 w-[60%]'
          id='middleComponentDiv'>
            <MiddleComponent filteredCard={filteredCard} />
          </div>

          <div className='w-[20%] mr-1'
          id='rightComponentDiv'>
            <RightComponent filteredCard={filteredCard} />
          </div>
      </div>  

      {/* Conditional Rendering on the basis of state of 'modal' */}
      <div>
        {
          modal && ( <ModalShare /> )
        }
      </div>
    </div>
  );
}

export default FlashCardDetails;