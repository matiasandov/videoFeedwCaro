import _ from "lodash";

//items creo que seria un array de las peliculas
export function paginate(items, pageNumber, pageSize){
    //index inicial de la pagina en la que este
    const startIndex = (pageNumber - 1) * pageSize;
    //va a regresar solo items que empiecen desde el startIndex hasta el tamano de la pagina
    //1. (items) se convierte en objeto lodash / 2. se toma desde startIndex hasta pageSize /3.se toma el valor de los items
    return _(items).slice(startIndex).take(pageSize).value();
};

