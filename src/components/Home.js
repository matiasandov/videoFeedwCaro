import React from 'react';
import "./Home.css";
//import videoItems from '../services/videos';
import 'material-icons/iconfont/material-icons.css';

//import searchBar from "./components/searchBar";
//import searchBar from './searchBar';

export default function Home({data}) {
    function renderCategoryItem() {

        return data.map((renderItem) => {
            //lo de css de classname es lo que hace que el feed se ve con 3 cols y tambien el archivo home
            return (
                <div className='flex justify-center items-center flex-col mt-4' key={renderItem.name}>
                    <div className='category-outer-circle'>
                        <div className='category-inner-circle flex justify-center items-center'>
                            <i className="material-icons text-4xl">{renderItem.iconName}</i>
                        </div>

                    </div>

                    <div className='font-bold'>{renderItem.name}</div>
                    <div className='font-bold'>{renderItem.duration}</div>
                   
                    <div className='row'>
                        <i className="material-icons text-4xl">{renderItem.stars}</i>
                        <p className='font-bold'>{renderItem.rating}</p>
                    </div>

                </div>
            );
        })



    }




    return (
        <div>
            
            <div className="header flex justify-center items-center text-3xl font-bold" > SYNCALL </div>
            <div className='grid grid-cols-3'>
                {renderCategoryItem()}
            </div>

        </div>

    );
}
