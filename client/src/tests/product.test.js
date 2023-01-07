import { render,screen,fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import ProductDetails from "../components/ProductDetails"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store'
const initialState = { output: 10 };
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
let store;
test('product card present',()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const element=screen.getByTestId(/productCard/i)
    expect(element).toBeInTheDocument()
})

test('product Name present',()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const element=screen.getByTestId(/productName/i)
    expect(element).toBeInTheDocument()
})

test('product Desc present',()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const element=screen.getByTestId(/productDesc/i)
    expect(element).toBeInTheDocument()
})

test('product price present',()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const element=screen.getByTestId(/productPrice/i)
    expect(element).toBeInTheDocument()
})

test('product Image present',()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const element=screen.getByTestId(/productImg/i)
    expect(element).toBeInTheDocument()
})

test('product stock present',()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const element=screen.getByTestId(/productStock/i)
    expect(element).toBeInTheDocument()
})

test('product Inc present',()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const element=screen.getByTestId(/productInc/i)
    expect(element).toBeInTheDocument()
})

test('product Decr present',()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const element=screen.getByTestId(/productDecr/i)
    expect(element).toBeInTheDocument()
})

test('product Inc click',async()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const quantity=await screen.getByTestId(/quantity/i)
    const element=screen.getByTestId(/productInc/i)

    fireEvent.click(element);
    expect(quantity).toHaveTextContent("1");
})

test('product Decr click',async()=>{
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <ProductDetails />
        </Provider>
    </Router>)
    const quantity=await screen.getByTestId(/quantity/i)
    const element=screen.getByTestId(/productDecr/i)
    fireEvent.click(element);
    expect(quantity).toHaveTextContent("");
})