import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Products from "../components/ProductsList"
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
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
    },
];
let store;
store = mockStore({ products: { products: [...items] }});
function renderWithProviders(ui, { reduxState } = {}) {
    return render(<Router><Provider store={store}>{ui}</Provider></Router>);
}
test('it should', async () => {
    const {getAllByTestId } = await renderWithProviders(<Products />, {
        store: { products: { products: [...items] } }
    });
    getAllByTestId('productCard');
    getAllByTestId('productImage');
    getAllByTestId('productName');
    getAllByTestId('productDesc');
    getAllByTestId('productPrice')
})