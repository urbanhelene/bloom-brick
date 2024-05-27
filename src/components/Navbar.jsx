import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ itemCount }) => {
    return (
        <nav className='w-vw bg-[#4F7942] p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/home' className='text-white font-bold text-xl link-hover'>Home</Link>
                <Link to='/' className='text-white font-bold text-xl link-hover'>Shop</Link>
                <Link to='/basket' className='text-white font-bold text-xl link-hover'>
                    Basket {itemCount > 0 && `(${itemCount})`}
                </Link>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    itemCount: PropTypes.number.isRequired,
};

export default Navbar;
