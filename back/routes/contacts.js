const router = require("express-promise-router")();
const contactController = require("../controllers/contacts");
const { validateBody, schemas } = require("../helpers/routeHelper");

router.get("/list", contactController.list);
router
  .route("/add")
  .post(validateBody(schemas.contactSchema), contactController.add);
router.get("/delete/:id", contactController.delete);
router
  .route("/update/:id")
  .get(contactController.show)
  .post(validateBody(schemas.contactSchema), contactController.edit);

module.exports = router;
