import { forwardRef } from "react"



    const MyInput=forwardRef((props,searchRef)=>{
         return (
        <>

            <input
                // ref={searchRef}
                ref={searchRef}
                placeholder='looking for something'
            />

        </>

    )

    })


    export default MyInput;

   
