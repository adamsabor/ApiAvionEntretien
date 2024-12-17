import express from "express";
import {
  getAllAeronefs,
  getAeronefById,
  createAeronef,
  deleteAeronef,
} from "../../managers/aeronefManager";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const avions = await getAllAeronefs();
    res.json(avions);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const avion = await getAeronefById(parseInt(req.params.id));
    res.json(avion);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newAvion = await createAeronef(req.body);
    res.status(201).json(newAvion);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await deleteAeronef(parseInt(req.params.id));
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
