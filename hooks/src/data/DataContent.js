import React from "react";


export const data = {
    number: 123,
    text: 'Context API blá blá blá'
}

const DataContext = React.createContext(data)

export default DataContext;