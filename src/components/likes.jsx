import React, { Component } from 'react';
class Like extends Component {
    
    render() { 
        let classes = "fa fa-heart";
        //si se detecta la propiedad liked se ilumninara
        if (!this.props.liked) classes+= "-o";
        return (
        <i 
        onClick={this.props.onClick} 
        /*para que el cursor cambie*/
        style = {{cursor: 'pointer'}}
        className={classes}  
        /*para que se ilumine*/
        aria-hidden="true"/>
        );
    }
}
 
export default Like;