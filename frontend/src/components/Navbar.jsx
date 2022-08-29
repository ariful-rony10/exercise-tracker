import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className='font-bold text-xl text-center p-2 bg-purple-200 text-purple-900 md:text-xl lg:text-3xl'>
        <Link to="/">
          Exercise Tracker
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
