import express from "express";
import { submitContactForm, getAllContactSubmissions } from "../controller/contactController.js";

const router = express.Router();

// POST - Submit a new contact form
router.post("/submit", submitContactForm);

// GET - Retrieve all contact form submissions (admin route)
router.get("/all", getAllContactSubmissions);

export default router; 