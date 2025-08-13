export default function MyInput({myref}) {

    return (
        <>

            <input
                // ref={searchRef}
                ref={myref}
                placeholder='looking for something'
            />

        </>

    )
}