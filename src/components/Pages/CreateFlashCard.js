import { useState, useRef } from 'react';
import validationSchema from '../validationSchema/validationSchema';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { AiOutlineToTop } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs'
import { BiPencil } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setFlashCard } from '../flashCardSlicer/flashCardSlice';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const CreateFlashCard = () => {

  // Default Values to set for the formik input fields
  const navigate = useNavigate();
  const defaultValues = {
    groupid: nanoid(),
    groupName: '',
    description: '',
    groupImg: null,
    termImg : null,
    term: [
      {
        termid: nanoid(),
        termName: '',
        termDefination: '',
      }  
    ],
    date: Date.now(),
  };

  const dispatch = useDispatch();
  const groupImagePickerRef = useRef(null);
  const termImagePickerRef = useRef(null);
  const editRef = useRef(null);
  const [groupImg, setGroupImg] = useState('');
  const [termImg , setTermImg] = useState('');

  const addFlashCard = (values, actions) => {

    // setFlashCard() is called with payload 'values'
    dispatch(setFlashCard(values));

    // It will reset the form, group image and term image once user clicks create button
    actions.resetForm();     

    // re-setting group image and term image to empty 
    setGroupImg('');
    setTermImg('');
    navigate('/myflashcard');
  };

  return (
  <div className='lg:ml-24 sm:mt-2 ml-12'>
   <Formik initialValues={defaultValues} validationSchema={validationSchema}
   onSubmit={addFlashCard}>
   {/* values isSubmitting and serFieldValue are the properties we get with formki */}

   {({ values, isSubmitting, setFieldValue }) => (
    <Form className='space-y-2.5 text-slate-500 font-medium sm:mr-2'>
     <div className="flex flex-col px-10 py-4 bg-white drop-shadow-lg space-y-2.5 rounded-md">
      <div className='flex sm:flex-row items-center space-x-10 pt-3'>

       <div className='flex flex-wrap'>
        <div className='flex flex-col'>
          <h2>Create Group*</h2>
  
          <Field type='text' name='groupName' placeholder='Group Name...'
          className="border-slate-300 p-2 lg:mt-2 md:w-96 border-2 rounded-sm
          focus:ring-slate-300 focus:border focus:border-slate-400" />
  
          {/* If validation fails with this field it will show the error message
          as mentioned in validation schema */}
          <p className='text-sm text-red-300'>
            <ErrorMessage name='groupName' />
          </p>
        </div>
        
       <div className='ml-8 mt-2' >
        {groupImg ? (
         <img src={groupImg} alt='Group Img' className='w-28 h-28 object-contain' />) :
         (
          <button type='button' onClick={() => groupImagePickerRef.current.click()} 
            className='flex items-center px-5 py-2 mt-6 bg-white border-2 border-slate-300
            active:border-blue-600 text-blue-700 font-semibold rounded-md space-x-2'>
              <AiOutlineToTop />
              <p>Upload Image</p>

          <input type='file' ref={groupImagePickerRef} value={groupImg}
          onChange={(e) => {
            const file = e.target.files[0];
            // Validating the size of the file
          
            const reader = new FileReader();  
            reader.readAsDataURL(file);       
            // Once file is loaded, onload() will be triggered  
            reader.onload = () => {             
            setFieldValue('groupImg', reader.result);
            setGroupImg(reader.result);
          }}}
          // 'hidden' will hide the input field but still functional        
          hidden />
          </button> )
        }
       </div>
      </div>
     </div>

      <div className='flex flex-col w-full sm:w-[65%]'>
        <h2>Add Description*</h2>
      
        <Field as='textarea' name='description' rows={4} placeholder='Description...'
        className="resize-none border-slate-300 border-2 p-2 rounded-sm placeholder:opacity-40
        focus:ring-slate-400 focus:border focus:border-slate-400" />
        
        <p className='text-sm text-red-300'>
          <ErrorMessage name='description'/>
        </p>
      </div>
     </div>

     <div className='text-black drop-shadow-lg rounded-lg' >
      <FieldArray name='term'>
      {/* arrayHelper is provided by formik, so that arrays can be managed using array methods */}
      {
       (arrayHelper ) => {
        const term = values.term;
        return (
         <div>
          {
          // Below we are checking if term has some value and is not empty
           term && term.length > 0 ? term.map((term, index) => (
            <div className=" space-x-10 bg-white px-5 lg:px-10 py-4" key={index}>
             <div className="flex flex-col justify-around space-y-3 md:space-x-10 md:flex-row" >
              
              <div className='sm:w-10 lg:ml-8'>
               <p className='mt-12 p-2 bg-red-600 text-white text-center rounded-full'>
                {index + 1}
               </p>
              </div>

              <div className="relative flex flex-col justify-center space-y-3">
               <h2>Enter Term*</h2>
               
               <Field type='text' name={`term.${index}.termName`} innerRef={editRef} rows={3}
               className="border-slate-300 border-2 p-2 rounded-sm focus:ring-slate-300 focus:border
               focus:border-slate-400 lg:w-48 xl:w-56 2xl:60" />
               
               <p className='text-sm text-red-300'>
                  <ErrorMessage name={`term.${index}.termName`} />
               </p>
              </div>

              <div id='termDefinationDiv' className='relative flex flex-col justify-center space-y-3' >
                <h2>Enter Definition*</h2>
                
                <Field as='textarea' name={`term.${index}.termDefination`}
                className="resize-none border-slate-300 border-2 p-2 rounded-sm placeholder:opacity-40
                focus:ring-slate-400 focus:border focus:border-slate-400 lg:w-60 xl:w-80 2xl:w-96" />
                
                <p className='text-sm text-red-300'>
                  <ErrorMessage name={`term.${index}.termDefination`} />
                </p>
              </div>

              <div className='flex items-center spacex-x-2'>
               {
                termImg ? ( 
                  <img src={termImg} alt='Term Img' className='w-28 h-28 object-contain'/> ) :
                   (  
                    <button type='button' onClick={() => termImagePickerRef.current.click()}
                      className='lg:flex lg:items-center lg:w-[19rem] lg:mt-4 px-2 py-2
                      bg-white border-2 border-blue-600 active:border-slate-300 text-blue-700
                      font-semibold rounded-md space-x-2'>
                        <BiPlus />
                        Select Image
                                      
                      <input type='file' ref={termImagePickerRef} value={termImg}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();  
                        reader.readAsDataURL(file);       

                        reader.onload = () => {             
                        setFieldValue('termImg', reader.result);
                        setTermImg(reader.result);
                        };
                      }} hidden />
                    </button> )
               }

               <div className='flex items-center justify-around w-full md:flex-col md:space-y-5 md:mt-5'>
                <button type='button' onClick={() => { arrayHelper.remove(index) ; setTermImg('')}}>
                  <BsFillTrashFill className='h-7 text-red-400' />
                </button>
                  
                <button type='button' onClick={() => editRef.current.focus()}>
                  <BiPencil className='h-7 text-blue-600' />
                </button>
               </div>
              </div>
             </div>
            </div> )) : null
         }
            <button type='button' onClick={() =>
              arrayHelper.push({    // When new term space is created we need to make sure that it should not take the value of all the term
              termid: nanoid(),
              termName: '',
              termDefination: '',
            })}
            className="flex items-center space-x-2 text-blue-600 font-medium text-md
            bg-white w-full mb-5 px-5 py-2">
              <BiPlus />
                <p>Add More</p>
            </button>

            <div className='flex justify-center w-full' id='createButton'>
             <button type='submit' disabled={isSubmitting}
             className='py-2 px-6 bg-red-600 text-white rounded-md
             hover:bg-red-700 hover:cursor-pointer'>
              Create & Go...
             </button>
            </div>
         </div>
        );
       }
      }
      </FieldArray>
     </div>
    </Form>
   )}
  </Formik>
 </div>
 )
}

export default CreateFlashCard;