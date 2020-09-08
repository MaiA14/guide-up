const express = require("express");
const { requireAuth } = require("../../middlewares/requireAuth.middleware");
const {
  getGuide,
  getGuides,
  deleteGuide,
  updateGuide,
  addGuide,
} = require("./guide.controller");
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get("/", getGuides);
router.get("/:id", getGuide);
router.put("/:id", updateGuide);
router.delete("/:id", deleteGuide);
router.post("/", addGuide);

module.exports = router;
