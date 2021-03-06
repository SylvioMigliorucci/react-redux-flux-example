import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Routes from './routes';
import GlobalStyle from './styles/global'
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes />
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
