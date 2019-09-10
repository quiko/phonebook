import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import Input from "./formInput";
import useForm from "./formHook";
import axios from "axios";
import { addUrl, editUrl } from "../../constants";
import validate from "./validateForm";
import "./form.css";

function Form(props) {
  const { values, setValues, errors, setErrors, handleChange } = useForm(
    validate
  );

  useEffect(() => {
    if (props.match.params.id) {
      const getInitialValues = async id => {
        const result = await axios(editUrl + id);
        setValues(result.data.contact);
      };
      getInitialValues(props.match.params.id);
    }
  }, []);

  const handleAdd = async () => {
    try {
      await axios.post(addUrl, values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async id => {
    let data = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber
    };
    try {
      await axios.post(editUrl + id, data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    const id = props.match.params.id;
    const errors = validate(values);
    if (!(errors.lastName || errors.firstName || errors.phoneNumber)) {
      id !== undefined ? await handleEdit(id) : await handleAdd();
      props.history.push("/list");
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <Input
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </React.Fragment>
  );
}
export default Form;
