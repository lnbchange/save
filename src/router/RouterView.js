import React, { Component } from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'

export default class RouterView extends Component {
    render() {
        let {routes}=this.props;
        let redirect=routes.filter(v=>v.redirect);
        let router=routes.filter(v=>!v.redirect);
        return (
           <Switch>
               {
                   router.map((v,index)=>{
                       return <Route path={v.path} key={index} render={(props)=>{
                            if(v.children){
                                return<v.component {...props} routes={v.children}></v.component>
                            }else{
                                return <v.component {...props}></v.component>
                            }
                       }}></Route>
                   })
               }
               {
                   redirect.map((v,i)=>{
                       return <Redirect key={i} from={v.path} to={v.redirect}/>
                   })
               }
           </Switch>
        )
    }
}
