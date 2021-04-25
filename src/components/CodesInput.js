import React, {useState} from 'react';

import "./CodesInput.css"
import Card from "./UI/Card";

const CodesInput = (props) => {

    const [enteredCodes, setEnteredCodes] = useState('');

    function setCodesHandler(event) {
        setEnteredCodes(event.target.value);
    }

    function clear() {
        setEnteredCodes('');
    }

    function removeFirst() {
        setEnteredCodes(enteredCodes.split('\n').slice(1).join("\n"));
    }

    function pushFirst() {
        if (enteredCodes.length > 0) {
            props.onPushFirst(enteredCodes.split('\n')[0]);
            removeFirst();
        }

    }

    function pushAll() {
        if (enteredCodes.length > 0) {
            props.onPushAll(enteredCodes.split('\n'));
            clear();
        }
    }

    return (
        <Card header={"xCodes To Generate"}>
            <div className={"row"}>
                <div className={"col-md-12"}>
                <textarea value={enteredCodes}
                          className={"textAreaInput"}
                          onChange={setCodesHandler}
                          placeholder={props.placeHolderText}/>
                </div>
            </div>
            <div className={"row col-md-12"}>
                <div className={"col-md-6"}>
                    <button onClick={pushFirst} className={"btn-block btn btn-dark textAreaButton"}>Push First</button>
                </div>
                <div className={"col-md-6"}>
                    <button onClick={pushAll} className={"btn-block btn btn-primary textAreaButton"}>Push All
                    </button>
                </div>
            </div>
            <div className={"row col-md-12"}>
                <div className={"col-md-6"}>
                    <button onClick={removeFirst} className={"btn-block btn btn-secondary textAreaButton"}>Remove First
                    </button>
                </div>
                <div className={"col-md-6"}>
                    <button onClick={clear} className={"btn-block btn btn-secondary textAreaButton"}>Clear</button>
                </div>
            </div>
        </Card>
    );
}

export default CodesInput;
