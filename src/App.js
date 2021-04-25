import './App.css';
import './components/CodesInput';
import React, {useState} from 'react';

import CodesInput from "./components/CodesInput";
import GeneratedList from "./components/GeneratedList";
import Settings from "./components/Settings";

const App = () => {
    const [values, setValues] = useState([]);
    let settings = {
        url: '',
        source: '',
        medium: '',
        name: ''
    }

    const onPushAllHandler = (codesArr) => {
        let filteredCodes = codesArr.filter(code => {
            return code !== '';
        })

        setValues([...filteredCodes.map(verify).filter(code => {
            return code !== undefined
        }), ...values])
    }

    const onPushFirstHandler = (firstCode) => {
        const verified = verify(firstCode);
        if (verified !== undefined) {
            setValues([verified, ...values])
        }
    }

    const verify = (code) => {
        const processed = process(code);

        if (values.indexOf(processed) < 0) {
            return processed;
        } else {
            return undefined;
        }
    }

    const process = (code) => {
        if (code !== '' && code !== undefined) {
            return settings.url + '/' + code +
                '?utm_source=' + settings.source +
                '&utm_medium=' + settings.medium +
                '&utm_campaign=' + settings.name;
        } else {
            return undefined;
        }
    }


    return (
        <div className="App">
            <h1>TERMINAL X URL BUILDER</h1>
            <Settings settingsObj={settings}/>
            <CodesInput onPushAll={onPushAllHandler} onPushFirst={onPushFirstHandler}
                        placeHolderText='Enter xCodes here'/>
            <GeneratedList generatedValues={values} onListUpdated={setValues}/>
        </div>
    );
}

export default App;


