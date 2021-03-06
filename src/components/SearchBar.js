import React, { useState } from 'react';
import "./SearchBar.css";

//tienes que ponerle entre corchetes para indicar que lo recibira dinamicamnete
export default function SearchBar({ placeholder, data }) {
  //esto sera el estado del componente, ambos son arrays
  const [filteredData, setFilteredData] = useState([]);

  //el evento es lo que el usuario vaya escribiendo
  const handleFilteredData = (event) => {
    //debes acceder al valor del evento que estara guardado dentro de esta constante
    const searchWord = event.target.value;
    //este es un array que filtrara cada item de data, solo si este incluye ya search word en su title
    const newFilter = data.filter((item) => {
      return item.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    //se cambiara el estado del componente con el nuevo array filtrado
    if (searchWord === "") {
      //si searchword esta vacia entonces no habra ningun estado
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className='search'>

      {/* /* on change: siempre que haya más letras esta función automáticamente va buscando resultados con eso  */}
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          //se llamara cada vez que se escriba un nuevo caracter en la barra
          onChange={handleFilteredData}

        />
        {/* Queremos que lo scrollable solo se muestre cuando se empiece a escribir algo en la searchbar */}
        {
          filteredData.length !== 0 && (
            <div className='dataResult'>
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <a className='dataItem' href={value.link} target="_blank">
                    <p>{value.name} </p>
                  </a>
                );
              })}
            </div>
          )
        }


      </div>

    </div>
  )
}
