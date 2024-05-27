import P1 from '../assets/BrickFlower01.png';
import P2 from '../assets/BrickFlower02.png';
import P3 from '../assets/BrickFlower03.jpg';
import P4 from '../assets/BrickFlower04.png';
import P5 from '../assets/BrickFlower05.png';
import P6 from '../assets/BrickFlower06.jpg';

const productDetails = [
    {
        img: P1,
        title: 'Spring bouquet',
        brand: 'LEGO',
        price: ['35.99€']
    },
    {
        img: P2,
        title: 'Wild flowers',
        brand: 'LEGO',
        price: ['42.99€']
    },
    {
        img: P3,
        title: 'Potted daffodil',
        brand: 'MouldKing',
        price: ['26.99€']
    },
    {
        img: P4,
        title: 'Potted lilies',
        brand: 'MouldKing',
        price: ['23.99€']
    },
    {
        img: P5,
        title: 'Roses',
        brand: 'LEGO',
        price: ['55.99€']
    },
    {
        img: P6,
        title: 'Orchid',
        brand: 'LEGO',
        price: ['31.99€']
    },
];

const Cards = () => {
    return (
        <div className='w-full px-4 bg-white'>
            {/* Header Section */}
            <div className='w-full py-4' style={{ backgroundColor: '#EDFFE8', marginBottom: '2rem', marginTop: '1rem' }}>
                <h1 className='text-center products-header'>Products</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-14 lg:gap-20'> {/* Use grid-cols-1 for mobile and lg:grid-cols-5 for large screens */}
                {/* First empty box for margin */}
                <div className='hidden lg:block empty-box'></div>

                {/* Product Box 1 */}
                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[0].img} alt={`Product 1`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[0].title}</h2>
                            <h3 className='font-bold'>{productDetails[0].brand}</h3>
                            <h4 className='font-bold'>{productDetails[0].price}</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button'>Buy</button>
                    </div>
                </div>

                {/* Product Box 2 */}
                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[1].img} alt={`Product 2`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[1].title}</h2>
                            <h3 className='font-bold'>{productDetails[1].brand}</h3>
                            <h4 className='font-bold'>{productDetails[1].price}</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button'>Buy</button>
                    </div>
                </div>

                {/* Product Box 3 */}
                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[2].img} alt={`Product 3`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[2].title}</h2>
                            <h3 className='font-bold'>{productDetails[2].brand}</h3>
                            <h4 className='font-bold'>{productDetails[2].price}</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button'>Buy</button>
                    </div>
                </div>

                {/* Second empty box for margin */}
                <div className='hidden lg:block empty-box'></div>

                <div className='hidden lg:block empty-box'></div>

                {/* Product Box 4 */}
                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[3].img} alt={`Product 4`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[3].title}</h2>
                            <h3 className='font-bold'>{productDetails[3].brand}</h3>
                            <h4 className='font-bold'>{productDetails[3].price}</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button'>Buy</button>
                    </div>
                </div>

                {/* Product Box 5 */}
                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[4].img} alt={`Product 5`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[4].title}</h2>
                            <h3 className='font-bold'>{productDetails[4].brand}</h3>
                            <h4 className='font-bold'>{productDetails[4].price}</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button'>Buy</button>
                    </div>
                </div>

                {/* Product Box 6 */}
                <div className='shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                    <div className='image-section'>
                        <img className='w-full h-full object-cover' src={productDetails[5].img} alt={`Product 6`} />
                    </div>
                    <div className='text-section'>
                        <div className='text-left p-1'>
                            <h2 className='font-bold'>{productDetails[5].title}</h2>
                            <h3 className='font-bold'>{productDetails[5].brand}</h3>
                            <h4 className='font-bold'>{productDetails[5].price}</h4>
                        </div>
                        <button className='bg-[#4F7942] rounded-md font-medium m-4 p-2 small-button'>Buy</button>
                    </div>
                </div>

                {/* Second empty box for margin */}
                <div className='hidden lg:block empty-box'></div>
            </div>
        </div>
    );
};

export default Cards;
