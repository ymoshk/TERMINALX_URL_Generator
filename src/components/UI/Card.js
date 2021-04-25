import React from 'react';
import './Card.css'

const Card = (props) => {

    const getHeader = () => {
        let result = '';
        if (props.header !== '') {
            result = (
                <div className="card-header">
                    <h3>{props.header}</h3>
                </div>
            );
        }
        return result;
    }

    return (
        <div className={"container col-md-8 offset-md-2"}>
            <div className="card">
                {getHeader()}
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>

    );
};

export default Card;
