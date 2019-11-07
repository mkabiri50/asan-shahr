
import * as actionTypes from '../actions/actionTypes';
const initialState = {
    houses: [],
    error: false,
    house:[]
}


const reducer = (state = initialState, action) => {
 console.log(state, 'houseState')
    switch (action.type) {
        case actionTypes.SET_HOUSES:
            return {
                ...state,
                houses:action.houses,
                error:false,
             
            }
        case actionTypes.FETCH_HOUSES_FAILED:
            return {
                ...state,
                error: true
            }
            case actionTypes.GET_HOUSE_DETAIL:
                return{
                    ...state,
                    house:action.house
                }

        default:
            return state;
    }
}
export default reducer;