import { Link } from 'react-router-dom';
import {useState} from 'react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header className="px-2 py-4">
        <nav className="flex justify-between max-w-6xl mx-auto relative items-center">
          <p>LOGOO</p>
          <button onClick={toggleMenu} className="w-6 flex flex-col h-4 justify-between">
            <span className="w-full h-0.5 bg-black"></span>
            <span className="w-full h-0.5 bg-black"></span>
            <span className="w-full h-0.5 bg-black"></span>
          </button>
          <ul className={isOpen ? 'block absolute top-full w-full mt-5 text-center bg-blue-100 h-screen' : 'hidden'}>
            <li className="mr-6 mb-6">
              <Link className="transition duration-250 text-xl border-b-2 border-solid border-transparent hover:border-blue-500" to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link className="transition duration-250 block px-4 py-2 bg-blue-500 rounded text-white text-xl hover:bg-blue-600" to="/newJob">Add new job</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
