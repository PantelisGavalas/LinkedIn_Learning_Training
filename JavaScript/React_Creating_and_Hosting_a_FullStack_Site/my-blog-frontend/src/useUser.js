import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    // states for when loading user data and who the user is
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    // hook to subscribe to changes in the auth state
    useEffect(() => {
        // the callback function inside gets called whenever the user's authenticated
        // state changes --> user logged in/out, Firebase loaded user's auth state
        // the "unsubscribe" is used to close memory leeks that onAuthStateChanged tends to create
        const unsubscribe = onAuthStateChanged(getAuth(), function (user) {
            setUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    return { isLoading, user };
};

export default useUser;
