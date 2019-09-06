export default function validate(values) {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = " a first name is required";
  }
  if (!values.lastName) {
    errors.lastName = " a last name is required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = " a phone number is required";
  } else if (!/[+][0-9]{2}\s[0-9]{2}\s[0-9]{6,}/.test(values.phoneNumber)) {
    errors.phoneNumber = "Phone number is invalid";
  }
  return errors;
}
