import React from "react";
import "./Tile.css";

//deployment

const Tile = props => (
    <div className="tile-mount col-md-3">
        <div className="card" onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
                <img className="tile-img" alt={props.name} src={props.image} />
            </div>
        </div>
    </div>
);

export default Tile;