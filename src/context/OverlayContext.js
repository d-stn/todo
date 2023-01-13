import { createContext, useState } from "react";

export const OlayContext = createContext();

export const OlayContextProvider = ({ children }) => {
    const [addVisible, setAddVisible] = useState(false)
    const [detailsVisible, setDetailsVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [olayClasses, setOlayClasses] = useState(null)

    return (
        <OlayContext.Provider value={{
            addVisible,
            setAddVisible,
            detailsVisible,
            setDetailsVisible,
            editVisible,
            setEditVisible,
            olayClasses,
            setOlayClasses
        }}>
            {children}
        </OlayContext.Provider>
    );
};