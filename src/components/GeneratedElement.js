import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './GeneratedElement.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {faCopy} from '@fortawesome/free-solid-svg-icons'

const GeneratedElement = (props) => {
    const [generatedValue] = useState(props.generatedValue);

    const onDeleteHandler = () => {
        props.onDeleteGeneratedElement(generatedValue);
    };

    return (
        <div className={"elementRow row"}>
            <div className={"col-8 col-sm-10"}>
                <input type={"text"} readOnly={true} value={generatedValue}/>
            </div>
            <div className={"col-2 col-sm-1"}>
                <button value={generatedValue} className={"btn btn-danger btn-sm"}
                        onClick={onDeleteHandler}>
                    <FontAwesomeIcon icon={faTrashAlt}/></button>
            </div>
            <div className={"col-2 col-sm-1"}>
                <CopyToClipboard text={generatedValue}>
                    <button className={"btn btn-primary btn-sm"}>
                        <FontAwesomeIcon icon={faCopy}/>
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default GeneratedElement;
