import React, { Component } from 'react';

const ListGroup = (props) => {
    //en items se reciben los generos
    const {items, textProperty, valueProperty, onItemSelect, selectedItem} = props;

    return (
        <ul className='list-group'>
            {/* poner cada genero como un <li></li> */}
            {items.map(item => (
                <li 
                // se llamara al metodo que se paso en movies jsx, que este hara un setState para saber cual es el genre seleccionado
                onClick={ () => onItemSelect(item)}
                key={item[valueProperty]} 
                //se pondra la clase dinamicamente con este if
                //si el item es el seleccionado se eligira la clase active
                className={ item === selectedItem ? "list-group-item active" : "list-group-item" }
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>

    );
}

//asi ya no tienes que pasar name y id como parametro, porque ya sabe que siempre debe de acceder a 
//esas por default
ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}
 
export default ListGroup;