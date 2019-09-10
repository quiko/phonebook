import { useState} from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    values,
    setValues,
    setIsSubmitting,
    errors,
    setErrors
  };
};

export default useForm;
