import React from "react";
// import "./style.css";

// This component exports both the List and the ListItem components

export const List = ({ children }) => (
    <ul className="list-group">{children}</ul>
);

export const ListItem = ({children}) => (
    <li className="list-group-item">{children}</li>
)