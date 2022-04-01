import * as api from '../api/index.js';
import { FETCH_2DCARTOONS, FETCH_3DCARTOONS } from '../constants/actionTypes.js';

export const get2Dcartoons = () => async (dispatch) => {
    try {
        const { data } = await api.fetch2Dcartoons();
        dispatch({
            type: FETCH_2DCARTOONS,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const get3Dcartoons = () => async (dispatch) => {
    try {
        const { data } = await api.fetch3Dcartoons();
        dispatch({
            type: FETCH_3DCARTOONS,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}