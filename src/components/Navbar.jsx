import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Navbar = ({ itemCount }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white relative">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
                <div className="text-darkGreen font-bold">
                    <span className="font-lily-script text-4xl">Bloom</span>
                    <span className="font-alatsi text-4xl">Bricks</span>
                </div>
                <div className="hidden md:flex lg:space-x-56 md:space-x-24">
                    <Link to="/" className="text-darkGreen font-bold text-lg link-hover">Home</Link>
                    <Link to="/shop" className="text-darkGreen font-bold text-lg link-hover">Shop</Link>
                    <Link to="/basket" className="text-darkGreen font-bold text-lg link-hover">
                        Basket {itemCount > 0 && `(${itemCount})`}
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-darkGreen focus:outline-none">
                        ☰
                    </button>
                    {isOpen && (
                        <div className="absolute bg-white p-4 space-y-2 border-2 border-darkGreen mt-2 right-0">
                            <Link to="/" className="block text-darkGreen font-bold link-hover" onClick={closeMenu}>Home</Link>
                            <Link to="/shop" className="block text-darkGreen font-bold link-hover" onClick={closeMenu}>Shop</Link>
                            <Link to="/basket" className="block text-darkGreen font-bold link-hover" onClick={closeMenu}>
                                Basket {itemCount > 0 && `(${itemCount})`}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    itemCount: PropTypes.number.isRequired,
};

export default Navbar;
