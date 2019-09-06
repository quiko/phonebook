import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import useForm from "./formHook";
import axios from "axios";
import { addUrl, editUrl } from "../../constants";
import validate from "./validateForm";
import "./form.css";

function Form(props) {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
  } = useForm(validate);

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
    console.log(errors)
    if (!(errors.lastName || errors.firstName || errors.phoneNumber)) {
    id !== undefined ? await handleEdit(id) : await handleAdd();
      props.history.push("/");
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="row form-wrapper">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="input-field ">
            <i className="material-icons prefix ">account_circle</i>
            <input
              id="icon_prefix"
              type="text"
              name="firstName"
              value={values.firstName || ""}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="invalid " data-error="wrong">
                {errors.firstName}
              </span>
            )}
            <label class="active" htmlFor="icon_prefix">
              First Name
            </label>
          </div>

          <div className="input-field ">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="icon_prefix"
              type="text"
              name="lastName"
              value={values.lastName || ""}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="invalid " data-error="wrong">
                {errors.lastName}
              </span>
            )}
            <label className="active" htmlFor="icon_prefix">
              Last Name
            </label>
          </div>

          <div className="input-field ">
            <i className="material-icons prefix ">phone</i>
            <input
              id="icon_telephone"
              type="tel"
              name="phoneNumber"
              value={values.phoneNumber || ""}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className=" invalid" data-error="wrong">
                {errors.phoneNumber}
              </span>
            )}
            <label className="active" htmlFor="icon_telephone ">
              Telephone
            </label>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default Form;
