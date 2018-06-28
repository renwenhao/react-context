import React from 'react';
import PropTypes from 'prop-types';
export default class extends React.Component{
    static contextTypes = {
        color:PropTypes.string    
    }
    constructor(props){
        super(props);
    }

    render (){
        return <p style={{color:this.context.color}}>this is title </p>
    }
}