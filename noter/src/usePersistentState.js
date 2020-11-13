import React from "react";

function usePersistentState(defaultState, key)
{
    const [state, setState] = React.useState(() => 
    {
        const localStorageVal = localStorage.getItem(key);
        if(localStorageVal)
            return JSON.parse(localStorageVal);
        else
            return defaultState;
    });

    React.useEffect(() => 
    {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
}

export default usePersistentState;