import React, {useContext, useState} from 'react'

const LayoutContext = React.createContext({})

//export const LayoutProvider = LayoutContext.Provider
export const LayoutConsumer = LayoutContext.Consumer

export const useLayout = () => {
  return useContext(LayoutContext);
};

export const LayoutProvider = ({ children, value }) => {
  const [headerColor, setHeaderColor] = useState(false)

  return (
    <LayoutContext.Provider value={{
        layout: value,
        headerColor,
        setHeaderColor
    }}>
        {children}
    </LayoutContext.Provider>
  )
}

export default LayoutContext