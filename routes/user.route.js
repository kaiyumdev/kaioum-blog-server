import express from 'express';
import { test } from '../controller/user.controller.js'; // Ensure .js extension
const router = express.Router();

router.get("/test", test);

export default router;
