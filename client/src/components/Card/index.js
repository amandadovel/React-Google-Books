import React from "react";
import "./Card.css";

const Card = ({ icon, title, children }) => (
    <div className="card mt-4">
        <div className="card-header">
            <h3>
                <strong>
                    <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
                </strong>
            </h3>
        </div>
        <div className="card-body">{children}</div>
    </div>
)

export default Card;