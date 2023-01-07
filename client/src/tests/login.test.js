import { fireEvent, render, screen } from "@testing-library/react"
import Login from "../components/Login"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store'
const initialState = { output: 10 };
const mockStore = configureStore();
let store;
test('userInput present ', () => {
    store = mockStore(initialState);
    render(
        <Router>
            <Provider store={store}>
                <Login />
            </Provider>
        </Router>
    )
    const inputEliment = screen.getByTestId(/userName/i);
    expect(inputEliment).toBeInTheDocument();
})
test('password present ', () => {
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <Login />
        </Provider>
    </Router>)
    const inputEliment = screen.getByTestId(/password/i);
    expect(inputEliment).toBeInTheDocument();
})

test('login button present ', () => {
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <Login />
        </Provider>
    </Router>)
    const inputEliment = screen.getByTestId(/login/i);
    expect(inputEliment).toBeInTheDocument();
    
})

test('userInput should be Empty ', () => {
    store = mockStore(initialState);
    render(
        <Router>
            <Provider store={store}>
                <Login />
            </Provider>
        </Router>
    )
    const inputEliment = screen.getByTestId(/userName/i);
    expect(inputEliment.value).toBe("");
})
test('passwordshould be Emplty ', () => {
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <Login />
        </Provider>
    </Router>)
    const inputEliment = screen.getByTestId(/password/i);
    expect(inputEliment.value).toBe("");
})

test('userName should be Change ', () => {
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <Login />
        </Provider>
    </Router>)
    const inputEliment = screen.getByTestId(/password/i);
    let inputValue='test'
    fireEvent.change(inputEliment,{target:{value:inputValue}})
    expect(inputEliment.value).toBe(inputValue);
})
test('password should be Change ', () => {
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <Login />
        </Provider>
    </Router>)
    const inputEliment = screen.getByTestId(/password/i);
    let inputValue='test'
    fireEvent.change(inputEliment,{target:{value:inputValue}})
    expect(inputEliment.value).toBe(inputValue);
})

test('login button click ', () => {
    store = mockStore(initialState);
    render(<Router>
        <Provider store={store}>
            <Login />
        </Provider>
    </Router>)
    const inputEliment = screen.getByTestId(/login/i);
    const passwordEliment = screen.getByTestId(/password/i);
    let inputValue='test'
    fireEvent.change(passwordEliment,{target:{value:inputValue}})
    fireEvent.click(inputEliment)
    expect(passwordEliment.value).not.toBe('');
})