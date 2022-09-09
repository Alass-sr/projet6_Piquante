const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const sauceCtrl = require('../controllers/sauces');
const { route } = require("./user");

router.post("/", auth, sauceCtrl.createSauce);
router.put('/:id', auth, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.get("/:id", auth, sauceCtrl.getAllSauces);


module.exports = router;
