import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { signOut } from '../features/auth/authSlice'
import { logOut } from '../features/auth/authSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  return (
    <header className="bg-white flex justify-between items-center shadow p-4 w-full">
      <div>
         {/* <h1 className="text-xl font-semibold">Tranzo AI</h1> */}
      </div>
      <div className="flex justify-end items-center">
        <button
          // onClick={() => {dispatch(signOut())}}
          onClick={() => {
            localStorage.removeItem("authUser");
            dispatch(logOut());
            navigate("/signin");
          }}
          className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
