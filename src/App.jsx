import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Basket from './components/Basket';
import Home from './components/Home';

function App() {
    const [basket, setBasket] = useState([]);

    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            const existingProductIndex = prevBasket.findIndex(item => item.title === product.title);
            if (existingProductIndex >= 0) {
                const updatedBasket = [...prevBasket];
                updatedBasket[existingProductIndex].quantity += 1;
                return updatedBasket;
            } else {
                return [...prevBasket, { ...product, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (title, quantity) => {
        setBasket((prevBasket) => {
            return prevBasket.map(item =>
                item.title === title ? { ...item, quantity } : item
            );
        });
    };

    const removeItem = (title) => {
        setBasket((prevBasket) => {
            return prevBasket.filter(item => item.title !== title);
        });
    };

    const itemCount = basket.reduce((total, item) => total + item.quantity, 0);

    return (
        <Router>
            <Navbar itemCount={itemCount} />
            <div className="basket-container"> {/* Add this div to wrap the Basket component */}
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