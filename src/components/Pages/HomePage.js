import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='lg:mt-8 lg:ml-24 sm:ml-12'>
      <div className="w-full pt-2">

        <h1 className="text-xl font-semibold mb-5">
          Create Flashcard
        </h1>

        <div className="flex items-center space-x-10 mb-3">
          {/* Navlink component to make route functional */}

          <div className="text-sm font-semibold text-red-600">
            <NavLink to={"/"} style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid red" : undefined,
                paddingBottom: "6px",
              })} >
              Create New
            </NavLink>
          </div>

          <div className="text-sm font-semibold text-red-600">
            
            {/* Navlink has class called 'isActive' which we are defining here for styling */}
            <NavLink to={"/myflashcard"}
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid red" : undefined,
                paddingBottom: "6px",
              })}>
              My Flashcard
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage;