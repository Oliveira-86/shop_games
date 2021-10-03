class CartItem {
    constructor (image, quantity, productPrice, productTitle, sum, frete) {
        this.image = image;
        this.quantity = quantity;
        this.productPrice = productPrice;
        this.productTitle = productTitle;
        this.sum = sum;
        this.frete = frete;
    };
};

export default CartItem;