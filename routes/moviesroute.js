import express from "express"
import { MovieIndex ,Moviecreate , MovieUpdate , Moviedelete} from "../controllers/moviecontrollers.js";
const router = express.Router();






//getting the movies
router.get("/", MovieIndex)
//posting the movies
router.post("/",Moviecreate)
//updating the movie
router.put("/:id",MovieUpdate)

//deleting the movie
router.delete("/:id", Moviedelete )


export default router;
