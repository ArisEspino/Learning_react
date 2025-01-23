import { Actions } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

//Va reproducir un nuevo estado
export const counterReducer = (state: CounterState, action: Actions): CounterState => {

    switch (action.type) {

        case 'reset':
            return {
                count: 0,
                previous: 0,
                changes: 0
            }

        case 'increaseBy':
            return {
                ...state,
                count: state.count + action.payload.value,
                changes: state.changes + 1,
                previous: state.count
            }

        default:
            return state;
    }

}