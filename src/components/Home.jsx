import { Link } from 'react-router-dom';
import BB1 from '../assets/BloomBricks01.jpg';
import BB2 from '../assets/BloomBricks02.jpg';

const Home = () => {
    return (
        <div className="w-full px-4 bg-white">
            <div className="w-full py-4" style={{backgroundColor: '#EDFFE8', marginBottom: '2rem', marginTop: '1rem'}}>
                <h1 className='text-center products-header2'>The best way to bring color to your home, with<br/>everlasting flower-like decorations</h1>
            </div>
            <div className="flex flex-col items-center w-full">
                <Link to="/" className="bg-darkGreen text-white font-bold py-2 px-4 rounded-lg mb-10 link-hover">Take a look</Link>
                <div className="flex justify-center">
                    <img src={BB1} alt="Bloom Bricks 01" className="max-h-96 mr-2" />
                    <img src={BB2} alt="Bloom Bricks 02" className="w-80 h-72" style={{ marginLeft: '1rem', marginTop: 'auto', marginBottom: 'auto' }} />
                </div>
            </div>
        </div>
    );
};

export default Home;
