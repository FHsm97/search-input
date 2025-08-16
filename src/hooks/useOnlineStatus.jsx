import { useEffect, useState } from "react";


export default function useOnlineStatus() {

    const [isOnline, setIsInline] = useState(true)

    useEffect(() => {

        function handleOnline() {

            setIsInline(true)

        }

        function handleOffline() {

            setIsInline(false)

        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {

            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }

    }, [])


    return isOnline;



}