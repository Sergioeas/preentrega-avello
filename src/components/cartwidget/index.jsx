import { Icon } from '@iconify/react';


const CartWidget = ( {quantity = 0 }) => {

    return (
        <div className='cart-widget'>
            <span className='pill'>{quantity}</span>
            <Icon className='cart-widget__cart' icon="noto-v1:shopping-cart" />
        </div>
    );
};

export default CartWidget