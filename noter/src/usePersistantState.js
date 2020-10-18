import React from "react";

function usePersistantState(key, initialValue)
{
    let [state, internalSetState] = React.useState(initialValue);

    React.useEffect(() => 
    {
        let localStorageValue = localStorage.getItem(key);
        let hasLocalStorageValue = localStorageValue !== null;
        if(hasLocalStorageValue)
            internalSetState(JSON.parse(localStorageValue));
    }, []);

    let externalSetState = (newState) => {
        localStorage.setItem(key, JSON.stringify(newState));
        internalSetState(newState);
    };

    return [state, externalSetState];
}

export default usePersistantState;