import { Link } from 'react-router-dom';
import Image from '../assets/summareqlogo.png';

const NavBar = () => {
    return (
        <nav>
            <div className='bg-[#1e1e1e] h-15 w-full w-screen flex  items-center mr-5px'>
                <div className='w-50 mt-1.5'>
                    <img src={Image} alt="logo"/>
                </div>
                <div className='flex gap-5 ml-auto'>
                    <Link to="/dashboard" className="text-white hover:text-gray-500 text-xl no-underline">Dashboard</Link>
                    <Link to="/home" className="text-white hover:text-gray-500 text-xl no-underline">Home</Link>
                    <Link to="/" className="text-white hover:text-gray-500 text-xl no-underline mr-5">Logout</Link>
                </div>
                    
            </div>
        </nav>
    );
};

export default NavBar;