import React from 'react'


const Input = ({ values, errors, handleChange, handleSubmit }) => {
    return (
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
    )
    
}
export default Input