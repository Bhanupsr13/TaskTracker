import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";

export const useTodoContext = () => {
    const context = useContext(TodoContext)

    if(!context) {
        throw Error("usetodoContext must be used inside todoContextProvider.")
    }

    return context
}