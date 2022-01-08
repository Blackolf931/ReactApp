import Preloader from "../Common/Preloader/Preloader";
import React from "react";


export const WithSuspense= (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}