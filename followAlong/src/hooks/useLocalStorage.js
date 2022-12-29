export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)){                      // if we have an object stored in local storage,
            return JSON.parse(window.localStorage.getItem(key));    // we are going to get the value inside local storage for this key
        }                                                           // and we are going to return that object 
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    })
    
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
}


{

}

// inside the localStorage, the data is stored as a string. We are going to turn it into an object. 