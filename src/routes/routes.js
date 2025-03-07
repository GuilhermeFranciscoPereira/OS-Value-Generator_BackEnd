import OScontroller from "../controllers/OScontroller.js";
import { Router } from "express";

const router = Router();

// GET
router.get('/allOS', OScontroller.index); // To show all plates
router.post('/allOS/ID/:idGet', OScontroller.showById); // Find by the ID
// POST
router.post('/allOS', OScontroller.store); // Create new OS
// PATCH
router.patch('/allOS/PATCH/:idPatch', OScontroller.update); // Update fields
// DELETE
router.delete('/allOS/DELETE/:idDelete', OScontroller.delete); // Delete a OS from the database

export default router;