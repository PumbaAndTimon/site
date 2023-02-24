import {useEffect, useContext} from 'react';
import {CartContext} from '../CartContext';

export default function ShowAlert() {
    const cart = useContext(CartContext);

    useEffect(() => {
        const timeoutId = setTimeout(cart.hideAlert, 2000);
        return () => clearTimeout(timeoutId);
    }, [cart.hideAlert, cart.showAlert]);

    return (
        <div className="show-alert">{cart.showAlert}</div>
    );
}