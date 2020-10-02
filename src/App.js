import React from 'react'

import { Provider } from 'react-redux'
import { store } from './store/store'
import { ToastContainer } from 'react-toastify';
import { AppRouter } from './router/AppRouter'

import 'bootswatch/dist/lux/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <Provider store={store}>
            <AppRouter/>     


             <ToastContainer 
             position="top-right"
             autoClose={5000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss={false}
             draggable={false}
             pauseOnHover={false}/>
             
        </Provider>
    )
}

export default App
