const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create schema
const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

//create Model
const Contact = mongoose.model("contact", ContactSchema);

//export Model
module.exports = Contact;
