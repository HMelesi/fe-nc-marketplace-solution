import React from 'react';

const Loading = ({children, isLoading}) => {
    if(isLoading) {
        return (
            <div className="loadingScreen">
                <p>Loading...</p>
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>
        )
    } else {
        return children;
    }
};

export default Loading;