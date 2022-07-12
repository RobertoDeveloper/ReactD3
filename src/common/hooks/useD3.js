import { select } from "d3-selection";
import { useEffect, useRef } from "react"

export const useD3 = (render) => {

    const ref = useRef(); 

    useEffect(() => {
        render(select(ref.current))
    });

    return ref; 
}
