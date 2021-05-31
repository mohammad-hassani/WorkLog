import * as actionTypes from './actionTypes';

export const createTask = (task) => {
    return {
        type: actionTypes.CREATE_NEW_TASK,
        task : task
    }
};

export const deleteTask = (id) => {
    return {
        type: actionTypes.REMOVE_TASK,
        id: id
    }
}