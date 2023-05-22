import React from 'react';
import './cards.css';
import './App.css';
import CardView from "./components/CardView/CardView";


const App = () => {

    return (
        <div className="App">
            <div className="playingCards faceImages">
                <CardView rank="K" suit="hearts"/>
            </div>

        </div>
    );

};

export default App;
