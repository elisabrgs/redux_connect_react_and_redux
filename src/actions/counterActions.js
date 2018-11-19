import { ADD1, ADD10, REMOVE1, REMOVE10, RESET_COUNT } from "./types";

export const add1 = () => dispatch => {
    dispatch({type: ADD1})
}

export const add10 = () => dispatch => {
    dispatch({type: ADD10})
}

export const remove1 = () => dispatch => {
    dispatch({type: REMOVE1})
}

export const remove10 = () => dispatch => {
    dispatch({type: REMOVE10})
}

export const resetCount = () => dispatch => {
    dispatch({type: RESET_COUNT})
}