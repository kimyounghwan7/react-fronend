import { useEffect, useState } from "react";

// user validation hook
function useUserValidation({initialValues, onSubmit, validate}) {
    // var
    const [userValues, setUserValues] = useState(initialValues);

    // error var
    const [userValuesError, setUserValuesError] = useState({});

    // loading 
    const [isLoading, setIsLoading] = useState(false);

    // name var handle
    const handleUserValuesChange = async (event) => {
        //console.log(event.target);
        // value
        const {name, value} = event.target;
        setUserValues({ ...userValues, [name]: value});
    };

    // handle submit
    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        setUserValuesError(validate(userValues));
    };

    useEffect(() => {
        (async () => {
          if (isLoading) {
            if (Object.keys(userValuesError).length === 0) {
              await onSubmit(userValues);
            }
            setIsLoading(false);
          }
        })();
      }, [isLoading, onSubmit, userValues, userValuesError]);

    return {
        userValues,
        userValuesError,
        isLoading,
        handleUserValuesChange,
        handleSubmit
    };
}// useUserValidation

export default useUserValidation;