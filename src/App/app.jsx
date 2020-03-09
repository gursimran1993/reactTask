import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import store from './store'
import Layout from '../Container/Layout'
import Router from './router'
import '../Scss/app.scss'


function App(){
   return( 
   <Provider store={store}>
     <BrowserRouter>
        <Layout>
           <Router/>
        </Layout>
     </BrowserRouter>
     </Provider>
   )
}
export default App