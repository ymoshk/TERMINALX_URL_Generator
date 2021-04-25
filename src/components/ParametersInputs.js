import React from 'react'
import "./ParametersInput.css"
import Card from "./UI/Card";

const ParametersInputs = (props) => {
    return (
        <Card header={"Settings"}>
            <div className={"buttonsRow row col-md-12"}>
                <label>Campaign URL</label>
                <input className={"urlInput"} type={"text"} value={props.campaignUrl} onChange={props.onUrlChanged}/>
            </div>
            <div className={"buttonsRow col-md-12 row"}>
                <div className={"col-md-4"}>
                    <label>Campaign Source</label>
                    <input type={"text"} value={props.campaignSource} onChange={props.onSourceChanged}/>
                </div>
                <div className={"col-md-4"}>
                    <label>Campaign Medium</label>
                    <input type={"text"} value={props.campaignMedium} onChange={props.onMediumChanged}/>
                </div>
                <div className={"col-md-4"}>
                    <label>Campaign Name</label>
                    <input type={"text"} value={props.campaignName} onChange={props.onNameChanged}/>
                </div>
            </div>
        </Card>
    );
}

export default ParametersInputs;

