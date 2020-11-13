import React from "react";

function usePersistentState(defaultState, key)
{
    let [state, setState] = React.useState(defaultState);

    React.useEffect(() => 
    {
        let storedVal = localStorage.getItem(key);
        if(storedVal)
        {
            setState(JSON.parse(storedVal));
        }
    }, []);

    React.useEffect(() => 
    {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
}

export default usePersistentState;