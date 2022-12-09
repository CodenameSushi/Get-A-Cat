import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import { GlobalStyle } from './GlobalStyled'
import Router from './routes/Router'

const App = () => {
  
  const context = {
    
  }


  return (

    <GlobalContext.Provider value={context}>
    <ChakraProvider>
    <GlobalStyle/>
    <Router />
    </ChakraProvider>    
    </GlobalContext.Provider>

  )
}

export default App