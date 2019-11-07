import * as actionTypes from './actionTypes';
import axios from 'axios'

export const setHouses =(houses) =>{
    return{
        type:actionTypes.SET_HOUSES,
        houses:houses
    }
}
export const fetchHousesFailed =(err)=>{
    return{
        type:actionTypes.FETCH_HOUSES_FAILED,
        err:err
    }
}
export const initHouses =()=>{
    return dispatch =>{
        axios.get( "http://api.asanshahr.com/api/offers?pageSize=10&pageNumber=1")
        .then(res => {
           dispatch(setHouses(res.data))})
        .catch(err => { 
            dispatch(fetchHousesFailed(err))
        });

    }
}
export const getHouseDetail = (house)=>{
    return{
        type:actionTypes.GET_HOUSE_DETAIL,
        house:house
    }
}