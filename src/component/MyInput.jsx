import { forwardRef, useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce"



const MyInput = forwardRef((props, searchRef) => {

    const [searchTerm, setSearchTerm] = useState('')

    const searchText=useDebounce(searchTerm,1000)


    useEffect(()=>{

        console.log('send a ajax request');
        

    },[searchText])







    return (
        <>

            <input
                value={searchTerm}
                onChange={(event) => { setSearchTerm(event.target.value) }}
                // ref={searchRef}
                ref={searchRef}
                placeholder='looking for something'
            />

        </>

    )

})


export default MyInput;


