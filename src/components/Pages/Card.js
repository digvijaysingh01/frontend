import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setId } from '../flashCardSlicer/flashCardSlice';

const Card = ({ flashcard }) => {

  // To navigate different react page component
  const navigate = useNavigate();

  // To make changes in global state
  const dispatch = useDispatch();

  return (
    <div className='ml-0 mt-1 md:mt-2 md:block md:m-auto md:mb-10'>
        <div
          className="p-4 mx-8 flex flex-col space-y-3 items-center
          justify-center bg-white rounded-md text-black w-[23rem] h-[13rem]
          relative border-2 shadow-lg border-slate-200">
        
          <div className='absolute -top-9'>
            {/* First it will be checked if flashcard is not empty */}
            {
              flashcard.groupImg ?( 
                <img className='rounded-full w-16 h-16 object-cover aspect-square'
                src={flashcard.groupImg} alt={flashcard.groupname} />
              ) : (
                // If No image found then image will be empyt but will execute the line
                <img className='rounded-full w-16 h-16 object-cover aspect-square'
                src='' alt={flashcard.groupname} />
              )
            }
          </div>

          <h2 className='font-bold decoration-slate-100 text-lg'>
            {flashcard.groupName}
          </h2>
          
          <p className='text-center font-medium text-sm text-slate-600
          line-clamp-2 overflow-hidden text-ellipsis'>
            {flashcard.description}
          </p>
          
          <p className='font-medium text-sm text-slate-700' >
            {flashcard.term ? flashcard.term.length : 0}
              Card
          </p>

          <button
            className='py-1 px-16 text-red-600 font-semibold rounded-sm border-red-600
            ring-2 ring-red-600 hover:bg-red-600 hover:text-white'
            onClick={() => { dispatch(setId(flashcard.groupid)) ; navigate(`/flashcarddetails/${flashcard.groupid}`)}}>
              View
          </button>          
        </div>
    </div>    
  )
}

export default Card;
