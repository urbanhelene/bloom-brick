import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; {/* Library used for routing in React applications */}
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Basket from './components/Basket';
import Home from './components/Home';

function App() {
    // State to manage the basket items
    const [basket, setBasket] = useState([]);

    // Function to add a product to the basket
    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            // Check if the product already exists in the basket
            const existingProductIndex = prevBasket.findIndex(item => item.title === product.title);
            if (existingProductIndex >= 0) {
                // If it exists, increase the quantity
                const updatedBasket = [...prevBasket];
                updatedBasket[existingProductIndex].quantity += 1;
                return updatedBasket;
            } else {
                // If it doesn't exist, add the product with a quantity of 1
                return [...prevBasket, { ...product, quantity: 1 }];
            }
        });
    };

    // Function to update the quantity of a specific product in the basket
    const updateQuantity = (title, quantity) => {
        setBasket((prevBasket) => {
            return prevBasket.map(item =>
                item.title === title ? { ...item, quantity } : item
            );
        });
    };

    // Function to remove a product from the basket
    const removeItem = (title) => {
        setBasket((prevBasket) => {
            return prevBasket.filter(item => item.title !== title);
        });
    };

    // Calculate the total number of items in the basket
    const itemCount = basket.reduce((total, item) => total + item.quantity, 0);

    return (
        // Router component to manage the routing in the application, how to get to different pages
        <Router>
            <Navbar itemCount={itemCount} />
            <div className="basket-container">
                <Routes>
                    <Route path="/shop" element={<Cards addToBasket={addToBasket} />} />
                    <Route path="/basket" element={
                        <Basket
                            basket={basket}
                            updateQuantity={updateQuantity}
                            removeItem={removeItem}
                        />}
                    />
                    <Route path="/" element={<Home />} /> {/* Add this route for the Home component */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;