import { createContext, useState, useEffect } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

// Create the context
export type CurrentUserType = {
    [key: string]: any
} | null;

type CurrentUserContextType = {
    currentUser: CurrentUserType, 
    setCurrentUser: Dispatch <SetStateAction<CurrentUserType>>
}
export const CurrentUser = createContext<CurrentUserContextType>({ currentUser: {}, setCurrentUser: ()=>{} });

function CurrentUserProvider({ children }: { children: ReactNode }) {
    // Initialize state for currentUser
    const [currentUser, setCurrentUser] = useState<CurrentUserType>(null);

    // Fetch the logged-in user data on component mount
    useEffect(() => {
        const getLoggedInUser = async () => {
            try {
                const response = await fetch('http://localhost:5050/authentication/profile', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const user = await response.json();

                setCurrentUser(user);
            } catch (error) {
                console.error(error);
            }
        };
        getLoggedInUser();
    }, []); // Empty dependency array to run the effect only once

    // Pass currentUser and setCurrentUser to the context value
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider;