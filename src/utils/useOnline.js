import { useEffect, useState } from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const onlineHandler = () => {
            setIsOnline(true);
        }
        const offLineHandler = () => {
            setIsOnline(false);
        }
        window.addEventListener("online", onlineHandler);
    
        window.addEventListener("offline", offLineHandler);

        return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offLineHandler);
        }
    }, [])

    return isOnline;

    // we have to remove event listeners as well when we add them
    // we do it in fucntional component using return () => {} function just like the "UnMount cycle" of class component
    

}

export default useOnline;