import React from "react";

function usePersistantState(initialValue)
{
    let [state, internalSetState] = React.useState(initialValue);

    React.useEffect(() => 
    {
        let localStorageValue = localStorage.getItem("notes");
        let hasLocalStorageValue = localStorageValue !== null;
        if(hasLocalStorageValue)
            internalSetState(JSON.parse(localStorageValue));
    }, []);

    let externalSetState = (newState) => {
        localStorage.setItem("notes", JSON.stringify(newState));
        internalSetState(newState);
    };

    return [state, externalSetState];
}

export default usePersistantState;