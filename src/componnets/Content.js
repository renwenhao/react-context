import React from 'react';
import PropTypes from 'prop-types';
export default class extends React.Component{
    static contextTypes = {
        color1:PropTypes.string
    }
    constructor(props){
        super(props);
    }

    render(){
        return <p style={{color:this.context.color1}}>this is content</p>
    }
}