const router = require("express").Router();
const bookRoutes = require("./books");
const searchBook = require("./search");
// Book routes
router.use("/books", bookRoutes);
router.use("/search", searchBook)

module.exports = router;
