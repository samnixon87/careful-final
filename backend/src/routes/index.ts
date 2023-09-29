import express from "express";
import caregiversController from "../controllers/caregiversController";
import careRecipientsController from "../controllers/careRecipientsController";
import events from "../controllers/eventsController";
import cors from "cors";
import { validateAccessToken } from "../middleware/auth0.middelware";

const router = express.Router();

router.options("*", cors())

// Care Recipients findAll
router.get(
  "/care-recipients",
  cors(),
  validateAccessToken,
  careRecipientsController.findAll
);

// Caregivers findAll
router.get(
  "/caregivers",
  cors(),
  validateAccessToken,
  caregiversController.findAll
);

// Events findAll
router.get("/events/:id", cors(), validateAccessToken, events.findAll);

export default router;
