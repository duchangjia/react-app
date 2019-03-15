// 组件
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import './index.css'

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';
// redux
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducer'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
// router
import {BrowserRouter, Route, Link,Redirect,Switch} from 'react-router-dom';
let store = createStore(reducers,compose(
    applyMiddleware(thunk),
    // redux工具的使用
    window.devToolsExtension?window.devToolsExtension():f=>f
))
function Boss(){
    return <h2>boss</h2>
}
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {/*只渲染命中的第一个Route*/}
                <AuthRoute></AuthRoute>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </div>
            {/*<Redirect to='/four' component={four}></Redirect>*/}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
