import { FETCH_2DCARTOONS, FETCH_3DCARTOONS } from "../constants/actionTypes";

export default (cartoons = [], action) => {
    switch(action.type) {
        case FETCH_2DCARTOONS:
            return action.payload;
        case FETCH_3DCARTOONS:
            return action.payload;
        default:
            return cartoons;
    }
}