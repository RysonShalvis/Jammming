import React from 'react';
import './Track.css';

class Track extends React.Component {


    renderAction() {//Not sure if I did this method correct. Step 27
        if (this.props.isRemoval) {
            return <button>-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }

    render() {


        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{/*<!-- track name will go here -->*/}</h3>
                    <p>{/*<!-- track artist will go here--> | <!-- track album will go here -->*/}</p>
                </div>
                <button className="Track-action">{this.renderAction()}</button>
            </div>
        );
    }
};

export default Track;