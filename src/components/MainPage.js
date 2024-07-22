import React from 'react';
import BouncingCells from './BouncingCells';

function MainPage() {
    return (
        <div>
            <BouncingCells />
            <div className="container has-text-centered">
                <h1 className="title">Eric Xie</h1>
                {/* <br />
            <p></p> */}
            </div>
        </div>
    )
}

export default MainPage;