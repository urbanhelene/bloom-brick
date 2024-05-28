import { Link } from 'react-router-dom'; // Import Link component for navigation
import PropTypes from 'prop-types'; // Import PropTypes, which basically checks if a prop is the correct type
import { useState } from 'react'; // Import useState hook for managing state

const Navbar = ({ itemCount }) => {
    // State to manage the mobile menu open/close state
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the mobile menu
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
                    {/* Navigation links for larger screens */}
                    <Link to="/" className="text-darkGreen font-bold text-lg link-hover">Home</Link>
                    <Link to="/shop" className="text-darkGreen font-bold text-lg link-hover">Shop</Link>
                    <Link to="/basket" className="text-darkGreen font-bold text-lg link-hover">
                        {/* Display item count if greater than 0 */}
                        Basket {itemCount > 0 && `(${itemCount})`}
                    </Link>
                </div>
                <div className="md:hidden">
                    {/* Button to toggle the mobile menu */}
                    <button onClick={toggleMenu} className="text-darkGreen focus:outline-none">
                        ☰
                    </button>
                    {isOpen && (
                        <div className="absolute bg-white p-4 space-y-2 border-2 border-darkGreen mt-2 right-0">
                            {/* Navigation links for mobile screens */}
                            <Link to="/" className="block text-darkGreen font-bold link-hover" onClick={closeMenu}>Home</Link>
                            <Link to="/shop" className="block text-darkGreen font-bold link-hover" onClick={closeMenu}>Shop</Link>
                            <Link to="/basket" className="block text-darkGreen font-bold link-hover" onClick={closeMenu}>
                                {/* Display item count if greater than 0 */}
                                Basket {itemCount > 0 && `(${itemCount})`}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

// Type-checking for the itemCount prop - using the imported PropTypes
Navbar.propTypes = {
    itemCount: PropTypes.number.isRequired,
};

export default Navbar;
