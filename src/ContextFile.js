import React, { useState } from 'react'

export const DataContext = React.createContext();

const ContextFile = (props) => {
    const [contextState, setContextState] = useState("tyagi")

    return (
        <DataContext.Provider value={{ contextState, setContextState }}>
            <>
                <div className="container">
                    {props.children}
                </div>
            </>
        </DataContext.Provider>

    )
}

export default ContextFile