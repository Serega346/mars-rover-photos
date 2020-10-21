import React from 'react';

import {Header} from "./components/Header/header";
import {Main} from "./containers/mainPage/mainPage";
import {Footer} from "./components/Footer/footer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
