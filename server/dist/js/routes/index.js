"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puppies_1 = require("../controllers/puppies");
const router = (0, express_1.Router)();
router.get("/puppies", puppies_1.getPuppies);
router.post("/add-puppy", puppies_1.handleAddPuppy);
router.put("/edit-puppy/:id", puppies_1.updatePuppy);
router.delete("/delete-puppy/:id", puppies_1.deletePuppy);
exports.default = router;
