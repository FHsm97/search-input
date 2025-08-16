import { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";





export default function SaveProgress() {


   const isOnline=useOnlineStatus()


    const progressHandler = () => {


        console.log('save progress');


    }

    return (
        <button onClick={progressHandler} disabled={!isOnline} className={`font-bold border border-gray-300 px-4 py-1 rounded ${isOnline ? '' : 'opacity-50'}`}>
            {isOnline ? 'save progress' : 'Reconecting...'}
        </button>

    )



}