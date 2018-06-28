import React from 'react';
import Content from './Content'
import PropTypes from 'prop-types';
export default class extends React.Component{
    static contextTypes = {
        color:PropTypes.string
    }
    constructor(props){
        super(props);
    }


    render (){
        return <div>
            <h1 style={{color:this.context.color}}>this is main</h1>  
            <Content/>
        </div>
    }
}