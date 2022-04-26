import React, { Component }  from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

//recibira props
const Pagination = props => {
    //variables de props para no poner siempre props.bariable
    const {itemsCount, pageSize, onPageChanged, currentPage} = props;

    //numero de paginas dependiendo de cuantas peliculas haya y cuantas deba haber por pagina
    const pagesCount = Math.ceil( itemsCount/ pageSize);
    
    //si solo hay una pag no regresa lo que se renderiza abajo
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount+1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map( page =>(
                //    se creo un metodo dinamico para cambiar de clase el elemento de la lsita si es seleccionado
                <li key = {page} className={page === currentPage ? "page-item active" : "page-item"} >
                    {/* 
    onPageChanged es para levantar un evento cada vez que la pagina cambie, cuando se de click
    */}
                    <a  className="page-link"  onClick={() => onPageChanged(page)}  >{page}</a>
                </li>))}
            </ul>
        </nav>
          
         );
}

//aqui agregas los tipos de datos que deberia recibir el componente pagination
//la otrografia es importante
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChanged: PropTypes.func.isRequired
};
 
export default Pagination;