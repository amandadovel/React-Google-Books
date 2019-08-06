const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Google Routes
router.use("/google", googleRoutes);

// Book Routes
router.use("/books", bookRoutes);

module.exports = router;
