import React from "react";

function usePersistentState(key, initialValue)
{
    let initialState = JSON.parse(localStorage.getItem(key));
    let [state, internalSetState] = React.useState(initialState);

    React.useEffect(() => 
    {
        let localStorageValue = localStorage.getItem(key);
        let hasLocalStorageValue = localStorageValue !== null;
        if(!hasLocalStorageValue)
            localStorage.setItem(key, JSON.stringify(initialValue));
    }, []);

    let externalSetState = (newState) => {
        localStorage.setItem(key, JSON.stringify(newState));
        internalSetState(newState);
    };

    return [state, externalSetState];
}

export default usePersistentState;