
import * as actionTypes from '../actions/actionTypes';
const initialState = {
    isAuth:false,
    data:[]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return{
                ...state,
                isAuth:true,
                data:action.values
            }
            default:
                    return state;
}
}
export default reducer;