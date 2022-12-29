// hooks always start with "use" just like useState and useForm
import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValue, cb) => {
    const [values, setValues] = useLocalStorage(key, initialValue)

    const clearForm = () => {
        setValues(initialValue); 
    }

    const handleSubmit = event => {
        event.preventDefault();
        cb();
    }

    const handleChanges = event => {
        localStorage.setItem([event.target.name], event.target.value)
        setValues({...values, [event.target.name] : event.target.value}) // we need to map over property name to the value that we are passing in
                        // we set it as event.target.name to target both username and email
    }
    return [values, clearForm, handleChanges, handleSubmit];
}