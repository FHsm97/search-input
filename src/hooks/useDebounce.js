import { useEffect, useState } from "react";



export default function useDebounce(value, delay) {


    const [debounceValue, SetDebounceValue] = useState('')


    useEffect(() => {

        const timeoutID = setTimeout(() => {

            SetDebounceValue(value)

        }, 1000);


        return () => {
            // console.log('e');

            clearTimeout(timeoutID)

        }

    }, [value,delay])



    return debounceValue;

}