import CartItem from '../../models/cart-item';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/Cart';

const initialState = {
    items: {},
    totalAmount: 0,
    totalFrete: 0,
    totalQuantity: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productName = addedProduct.name;
            const productImage = addedProduct.image;

            let updateOrNewCart;

            if (state.items[addedProduct.id]) {
                // already have the item in the cart
                updateOrNewCart = new CartItem(
                    productImage,
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    productName,
                    state.items[addedProduct.id].sum + productPrice,
                    state.items[addedProduct.id].frete + 10
                );
            } else {
                updateOrNewCart = new CartItem(productImage, 1, productPrice, productName, productPrice, 10);
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updateOrNewCart },
                totalAmount: state.totalAmount + productPrice,
                totalFrete: state.totalFrete + 10,
                totalQuantity: state.totalQuantity + 1
            };

        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.prodId];
            const currentQty = selectedCartItem.quantity;

            let updatedCartItems;

            if (currentQty > 1) {
                const updateCartItem = new CartItem(
                    selectedCartItem.image,
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productName,
                    selectedCartItem.sum - selectedCartItem.productPrice,
                    selectedCartItem.frete - 10
                );
                updatedCartItems = { ...state.items, [action.prodId]: updateCartItem };
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.prodId];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice,
                totalFrete: state.totalFrete - 10,
                totalQuantity: state.totalQuantity - 1
            };
    }
    return state
}

export default cartReducer;