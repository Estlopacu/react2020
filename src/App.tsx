import React from 'react';
// import {characterReducer, initialState} from "./reducers/character-reducer";
// import {CharacterProvider} from "./providers/character-provider";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// components
import Home from './pages/homepage/Home';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <main>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
