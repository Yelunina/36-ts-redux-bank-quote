import { DEPOSIT, WITHDRAW } from "../actions/accountActions";
import { PUT_QUOTE } from "../actions/quoteAction";
import { ReduxAction, RootState } from "../utils/types";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
}

export const accountReducer = (state: RootState = initialState, action: ReduxAction<number>) => {

    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload }
        case WITHDRAW:
            const res = state.balance - action.payload;
            return { ...state, balance: res < 0 ? state.balance : res }
        case PUT_QUOTE:
            return { ...state, quote: action.payload }
        default:
            return state;
    }
}