import PropTypes from 'prop-types';

const Basket = ({ basket, updateQuantity, removeItem }) => {
    const totalAmount = basket.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = totalAmount > 100 ? 0 : 3.00;
    const tax = 5.00;
    const grandTotal = totalAmount + shipping + tax;

    return (
        <div className='w-full px-4 bg-white'>
            <div className='w-full py-4' style={{ backgroundColor: '#EDFFE8', marginBottom: '2rem', marginTop: '1rem' }}>
                <h1 className='text-center products-header'>Shopping Basket</h1>
            </div>
            <div className='flex flex-col items-center w-full'>
                {basket.length === 0 ? (
                    <p>Your basket is empty.</p>
                ) : (
                    <div className='w-full max-w-4xl'>
                        {basket.map((item, index) => (
                            <div key={index} className='shadow-xl flex flex-row my-4 rounded-lg'>
                                <div className='image-section flex-1'>
                                    <img className='w-full h-full object-cover' src={item.img} alt={item.title} />
                                </div>
                                <div className='text-section flex-1 p-4'>
                                    <h2 className='font-bold mb-1'>{item.title}</h2>
                                    <h3 className='font-bold mb-1'>{item.brand}</h3>
                                    <h4 className='font-bold mb-1'>{(item.price * item.quantity).toFixed(2)}€</h4>
                                    <div className='flex items-center mb-1'>
                                        <button onClick={() => updateQuantity(item.title, Math.max(1, item.quantity - 1))}>-</button>
                                        <span className='mx-2'>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.title, item.quantity + 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeItem(item.title)} className='bg-darkRed rounded-md font-medium p-2 small-button'>Remove</button>
                                </div>
                            </div>
                        ))}
                        <div className='w-full mt-4'>
                            <div className='shadow-xl p-4 rounded-lg bg-yellowGreen'>
                                <h2 className='font-bold text-lg mb-4'>Your Order</h2>
                                <div className='flex justify-between mb-2'>
                                    <span>Subtotal</span>
                                    <span>{totalAmount.toFixed(2)}€</span>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? 'FREE' : `${shipping.toFixed(2)}€`}</span>
                                </div>
                                <div className='flex justify-between mb-2'>
                                    <span>Tax</span>
                                    <span>{tax.toFixed(2)}€</span>
                                </div>
                                <div className='flex justify-between font-bold text-lg'>
                                    <span>Total</span>
                                    <span>{grandTotal.toFixed(2)}€</span>
                                </div>
                                <button className='bg-darkGreen w-full mt-4 py-2 rounded-lg text-white'>Continue to payment</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

Basket.propTypes = {
    basket: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    updateQuantity: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
};

export default Basket;