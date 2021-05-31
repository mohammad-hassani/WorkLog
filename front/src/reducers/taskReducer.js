import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
        case actionTypes.CREATE_NEW_TASK:
            return [
                ...state,
                Object.assign({}, action.task)
            ];
        case actionTypes.REMOVE_TASK:
            return state.filter((data, i) => i !== action.id);
        default:
            return state;
    }
};