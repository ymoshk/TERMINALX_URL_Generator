import React from 'react';
import GeneratedElement from "./GeneratedElement";
import Card from "./UI/Card";
import {CopyToClipboard} from "react-copy-to-clipboard";


const GeneratedList = (props) => {
    const values = props.generatedValues;

    const onDeleteHandler = (value) => {
        props.onListUpdated(values.filter(el => el !== value))
    };

    const onRemoveAllHandler = () => {
        props.onListUpdated([]);
    }
    
    const buildList = () => {
        let result = (
            <Card header={"Results"} className={"container offset-md-2 col-md-8"}>
                <div className={"row col-md-12"}>
                    <div className={"col-md-6"}>
                        <CopyToClipboard text={values.join('\n')}>
                            <button className={"btn-block btn btn-dark textAreaButton"}>Copy
                                All
                            </button>
                        </CopyToClipboard>
                    </div>
                    <div className={"col-md-6"}>
                        <button onClick={onRemoveAllHandler}
                                className={"btn-block btn btn-danger textAreaButton"}>Remove All
                        </button>
                    </div>
                </div>
                {values.map(generatedValue =>
                    <GeneratedElement key={generatedValue} generatedValue={generatedValue}
                                      onDeleteGeneratedElement={onDeleteHandler}/>
                )};
            </Card>
        )

        if (values.length === 0) {
            result = (
                <Card><h4>Result List Is Still Empty</h4></Card>
            )
        }

        return result;
    }

    return (
        buildList()
    );
}
export default GeneratedList;
