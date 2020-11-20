import React, {useContext} from 'react'

const AdditionalDataContext = React.createContext({})

export const AdditionalDataProvider = AdditionalDataContext.Provider
export const AdditionalDataConsumer = AdditionalDataContext.Consumer

export const useAdditionalData = () => {
  return useContext(AdditionalDataContext);
};

export default AdditionalDataContext