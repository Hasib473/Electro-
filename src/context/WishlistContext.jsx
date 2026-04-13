import { createContext, useContext, useState, useCallback } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToWishlist = useCallback((product) => {
        setWishlistItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems;
            }
            return [...prevItems, product];
        });
    }, []);

    const removeFromWishlist = useCallback((productId) => {
        setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    }, []);

    const isInWishlist = useCallback((productId) => {
        return wishlistItems.some((item) => item.id === productId);
    }, [wishlistItems]);

    const clearWishlist = useCallback(() => {
        setWishlistItems([]);
    }, []);

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContext;
