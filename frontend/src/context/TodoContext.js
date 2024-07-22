import { createContext, useReducer } from "react";

export const TodoContext = createContext();

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LIST':
            return {
                List: action.payload
            }
        case 'CREATE_ITEM':
            return {
                List: [action.payload, ...state.List]
            }
        case 'DELETE_ITEM':
            return {
                List: state.List.filter(item => item._id !== action.payload._id)
            }
        default:
            return state
            
    }

}
export const TodoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(TodoReducer, {
        List: null
    })
    return (
        <TodoContext.Provider value={{...state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}