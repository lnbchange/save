import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

 class Home extends Component {
     componentDidMount(){
        axios.get('/list').then(res=>{
            this.props.getdata(res.data.value)
        })
     }
    render() {
        return (
            <div>
                这也
                {console.log(this.props.list)}
            </div>
        )
    }
}
let mapStateToProps=state=>{
    return{
        list:state.ListReducer.list
    }
};
let mapDispatchToProps=dispatch=>{
    return{
        getdata(value){
            dispatch({type:'SET_LIST',value})
        }
    }
}
Home=connect(mapStateToProps,mapDispatchToProps)(Home);
export default Home;
