import OScontroller from "../controllers/OScontroller.js";
import { Router } from "express";

const router = Router();

// GET
router.get('/allOS', OScontroller.index); // To show all plates
router.get('/allOS/id/:idGet', OScontroller.showById); // Find by the ID
router.get('/allOS/:clientName', OScontroller.showByClientName) // To search with a client name and show the all OS with the name
// POST
router.post('/allOS', OScontroller.store); // Create new OS
// PATCH
router.patch('/allOS/PATCH/:idPatch', OScontroller.update); // Update fields
// DELETE
router.delete('/allOS/DELETE/:idDelete', OScontroller.delete); // Delete a OS from the database

export default router;