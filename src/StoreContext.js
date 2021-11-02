import React from 'react'
import store from "./redux/redux-store";


const StoreContext = React.createContext(null);

const Provider = (props) => {
    return <StoreContext.Provider value = {props.store}
        {props.children}
    />
}

export default Provider;

export default StoreContext;