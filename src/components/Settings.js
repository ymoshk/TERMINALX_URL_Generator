import React from 'react';
import {useCookies} from "react-cookie";
import ParametersInputs from "./ParametersInputs";

const Settings = (props) => {
    const [recentURL, setRecentURL] = useCookies(['GCH_URL']);
    const [recentSource, setRecentSource] = useCookies(['GCH_SOURCE']);
    const [recentMedium, setRecentMedium] = useCookies(['GCH_MEDIUM']);
    const [recentName, setRecentName] = useCookies(['GCH_NAME']);
    props.settingsObj.url = recentURL.GCH_URL;
    props.settingsObj.source = recentSource.GCH_SOURCE;
    props.settingsObj.medium = recentMedium.GCH_MEDIUM;
    props.settingsObj.name = recentName.GCH_NAME;

    const expiration = new Date();
    expiration.setFullYear(2300);

    const onUrlChangedHandler = (event) => {
        props.settingsObj.url = event.target.value;
        setRecentURL('GCH_URL', props.settingsObj.url, {expires: expiration});
    }
    const onSourceChangedHandler = (event) => {
        props.settingsObj.source = event.target.value;
        setRecentSource('GCH_SOURCE', props.settingsObj.source, {expires: expiration});
    }
    const onMediumChangedHandler = (event) => {
        props.settingsObj.medium = event.target.value;
        setRecentMedium('GCH_MEDIUM', props.settingsObj.medium, {expires: expiration});
    }
    const onNameChangedHandler = (event) => {
        props.settingsObj.name = event.target.value;
        setRecentName('GCH_NAME', props.settingsObj.name, {expires: expiration});
    }
    return (
        <ParametersInputs
            campaignUrl={recentURL.GCH_URL}
            campaignSource={recentSource.GCH_SOURCE}
            campaignMedium={recentMedium.GCH_MEDIUM}
            campaignName={recentName.GCH_NAME}
            onUrlChanged={onUrlChangedHandler}
            onSourceChanged={onSourceChangedHandler}
            onMediumChanged={onMediumChangedHandler}
            onNameChanged={onNameChangedHandler}
        />
    );
};

export default Settings;
