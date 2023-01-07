import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react"
import Cart from "../components/Cart"
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const items = [
    {
        "name": "Fresho Kiwi - Green, 3 pcs",
        "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        "price": 87,
        "stock": 50,
        "quantity":1,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
    }
]

let store;
store = mockStore({ cart: { cartItems: [...items] }});
function renderWithProviders(ui, { reduxState } = {}) {
    return render(<Router><Provider store={store}>{ui}</Provider></Router>);
}
test('it should', async () => {
    const {getByTestId } = await renderWithProviders(<Cart/>, {
        store: store
    });
    getByTestId('cartCard');
    getByTestId('removeCart');
    getByTestId('cartImg');
    getByTestId('cartName');
    getByTestId('decrementBtn')
    getByTestId('cartQty')
    getByTestId('incrementBtn')
})
test('increment  should click', async () => {
    const {getByTestId } = await renderWithProviders(<Cart/>, {
        store: store
    });
    const element=getByTestId('incrementBtn')
    const cartQty=getByTestId('cartQty')
    fireEvent.click(element);
    expect(cartQty).toHaveTextContent("1");
})
test('decrement should click', async () => {
    const {getByTestId } = await renderWithProviders(<Cart/>, {
        store: store
    });
    const element=getByTestId('decrementBtn')
    const cartQty=getByTestId('cartQty')
    fireEvent.click(element);
    expect(cartQty).toHaveTextContent(1);
})