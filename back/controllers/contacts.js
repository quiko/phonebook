const Contact = require("../models/Contact");

module.exports = {
  //list of all contacts
  list: async (req, res, next) => {
    const contact = await Contact.find();
    res.status(200).json({ contact });
  },
  //save contact to db
  add: async (req, res, next) => {
    let contact = await new Contact(req.body);
    contact.save();
    res.status(200).json({ contact });
  },
  //get contact by id
  show: async (req, res, next) => {
    let contact = await Contact.findById(req.params.id);
    res.status(200).json({ contact });
  },
  //edit contact
  edit: async (req, res, next) => {
    let { id } = req.params;
    let contact = await Contact.updateOne({ _id: id }, req.body);
    res.status(200).json({ contact });
  },
  //delete contact
  delete: async (req, res, next) => {
    let { id } = req.params;
    await Contact.deleteOne({ _id: id });
    res.status(200).json("contact deleted !");
  }
};
