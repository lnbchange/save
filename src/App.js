import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import routes from './router/router.config'
import RouterView from './router/RouterView'
import {Provider} from 'react-redux'
import store from './store/index'
import './mock/index'

export default class App extends Component {
    render() {
        return (           
            <Provider store={store}>
               <BrowserRouter>
                    <RouterView routes={routes}/>
               </BrowserRouter>
            </Provider>
        )
    }
}
