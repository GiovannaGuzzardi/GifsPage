import React, { createContext, useContext, useState } from "react";

export const LikeContext = createContext({
    like: [],
    setLike: () => { }
});

export default function LikeProvider({ children }) {
    const [like, setLike] = useState([]);
    return <LikeContext.Provider value={{ like, setLike }} >{children}</LikeContext.Provider>
}

export function useLike() {
    const context = useContext(LikeContext)
    if (!context) throw new Error("Eu fazendo merda")
    return context
}
