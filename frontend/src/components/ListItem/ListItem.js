import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
    return (
        <div className="ListItem-Main">
            <h2 className="ListItem">{props.name}</h2>
        </div>
    );
}

export default ListItem;