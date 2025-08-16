import { forwardRef, useEffect, useState } from "react"
import useDebounce from "../hooks/useDebounce"
import useFormInput from "../hooks/useFormInput"



const MyInput = forwardRef((props, searchRef) => {

    const searchTermProps = useFormInput('')

    const searchText=useDebounce(searchTermProps.value,1000)


    useEffect(()=>{

        console.log('send a ajax request');
        

    },[searchText])







    return (
        <>

            <input
                // value={searchTerm}
                // onChange={(event) => { setSearchTerm(event.target.value) }}
                {...searchTermProps}
                // ref={searchRef}
                ref={searchRef}
                placeholder='looking for something'
            />

        </>

    )

})


export default MyInput;


