import { Router } from "express";
import {
  getPuppies,
  handleAddPuppy,
  updatePuppy,
  deletePuppy,
} from "../controllers/puppies";

const router: Router = Router();

router.get("/puppies", getPuppies);
router.post("/add-puppy", handleAddPuppy);
router.put("/edit-puppy/:id", updatePuppy);
router.delete("/delete-puppy/:id", deletePuppy);

export default router;
