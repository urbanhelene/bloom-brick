import PropTypes from 'prop-types'; // Import PropTypes, which basically checks if a prop is the correct type
import P1 from '../assets/BrickFlower01.png'; // Import images to use in the Cards component, I used this to easily change the picture if needed
import P2 from '../assets/BrickFlower02.png';
import P3 from '../assets/BrickFlower03.jpg';
import P4 from '../assets/BrickFlower04.png';
import P5 from '../assets/BrickFlower05.png';
import P6 from '../assets/BrickFlower06.jpg';

// Define an array of product details, each product has an image, title, brand, and price that you can change easily
const productDetails = [
    {
        img: P1,
        title: 'Spring bouquet',
        brand: 'LEGO',
        price: 35.99
    },
    {
        img: P2,
        title: 'Wild flowers',
        brand: 'LEGO',
        price: 42.99
    },
    {
        img: P3,
        title: 'Potted daffodil',
        brand: 'MouldKing',
        price: 26.99
    },
    {
        img: P4,
        title: 'Potted lilies',
        brand: 'MouldKing',
        price: 23.99
    },
    {
        img: P5,
        title: 'Roses',
        brand: 'LEGO',
        price: 55.99
    },
    {
        img: P6,
        title: 'Orchid',
        brand: 'LEGO',
        price: 31.99
    },
];

const Cards = ({ addToBasket }) => {
    {/* This page is set up on a grid that has 2 rows with 5 columns each. So each row has 5 "boxes" of space. */}
    {/* We wanted some empty space on the left and right side of the row on bigger devices to fit our figma design */}
    {/* so we made "empty boxes" that act as margins. The layout is 1 empty box, 3 boxes with products and again 1 empty box */}
    {/* This way we have space to the sides and the content in the middle, the empty boxes are then hidden on smaller screens */}
    return (
        <div className='w-full px-4 bg-white'>
            <div className='w-full py-4' style={{ backgroundColor: '#EDFFE8', marginBottom: '2rem', marginTop: '1rem' }}>
                <h1 className='text-center products-header'>Products</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-14 lg:gap-20'>
                <div className='hidden lg:block empty-box'></div>

                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[0].img} alt={`Product 1`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[0].title}</h2>
                            <h3 className='font-bold'>{productDetails[0].brand}</h3>
                            <h4 className='font-bold'>{productDetails[0].price.toFixed(2)}€</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button' onClick={() => addToBasket(productDetails[0])}>Buy</button>
                    </div>
                </div>

                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[1].img} alt={`Product 2`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[1].title}</h2>
                            <h3 className='font-bold'>{productDetails[1].brand}</h3>
                            <h4 className='font-bold'>{productDetails[1].price.toFixed(2)}€</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button' onClick={() => addToBasket(productDetails[1])}>Buy</button>
                    </div>
                </div>

                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[2].img} alt={`Product 3`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[2].title}</h2>
                            <h3 className='font-bold'>{productDetails[2].brand}</h3>
                            <h4 className='font-bold'>{productDetails[2].price.toFixed(2)}€</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button' onClick={() => addToBasket(productDetails[2])}>Buy</button>
                    </div>
                </div>

                <div className='hidden lg:block empty-box'></div>
                <div className='hidden lg:block empty-box'></div>

                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[3].img} alt={`Product 4`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[3].title}</h2>
                            <h3 className='font-bold'>{productDetails[3].brand}</h3>
                            <h4 className='font-bold'>{productDetails[3].price.toFixed(2)}€</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button' onClick={() => addToBasket(productDetails[3])}>Buy</button>
                    </div>
                </div>

                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[4].img} alt={`Product 5`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[4].title}</h2>
                            <h3 className='font-bold'>{productDetails[4].brand}</h3>
                            <h4 className='font-bold'>{productDetails[4].price.toFixed(2)}€</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button' onClick={() => addToBasket(productDetails[4])}>Buy</button>
                    </div>
                </div>

                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[5].img} alt={`Product 6`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[5].title}</h2>
                            <h3 className='font-bold'>{productDetails[5].brand}</h3>
                            <h4 className='font-bold'>{productDetails[5].price.toFixed(2)}€</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button' onClick={() => addToBasket(productDetails[5])}>Buy</button>
                    </div>
                </div>

                <div className='hidden lg:block empty-box'></div>
            </div>
        </div>
    );
};

// Define PropTypes for the Cards component to ensure correct prop types, ensures that expected data type is received
Cards.propTypes = {
    addToBasket: PropTypes.func.isRequired,
};

export default Cards;