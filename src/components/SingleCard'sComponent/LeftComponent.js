import { useDispatch, useSelector } from 'react-redux';
import { setId } from '../flashCardSlicer/flashCardSlice';

const LeftComponent = () => {

  // Getting the flashcards from the state
  const flashcards = useSelector((state) => state.flashcard.flashcards);
  const dispatch = useDispatch();

  // setId() function is called with the payload 'id'
  const renderCard = (id) => {
    dispatch(setId(id));
  }

  return (
    <div>
      <h4 className='font-medium leading-tight text-center
      text-base mt-4 mb-2 text-red-600 2xl:text-xl'>
        Your Flash Cards
      </h4>
      <hr />

      {/* All the flashcard names will be displayed using map() function */}
      <div className='overflow-scroll h-[20rem] hover:cursor-pointer'>
        {
          flashcards.map((ele, index) => (
            <div key={index}>
              <h5 onClick={() => { renderCard(ele.card.groupid) }}
                className='text-center mt-4 text-red-800 md:text-sm 2xl:text-lg 2xl:font-medium'>
                {ele.card.groupName}
                <hr className='w-60 mt-2 block m-auto' />
              </h5>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default LeftComponent;
