import express from 'express';
import { signup } from '../controller/auth.controller.j';
const router = express.Router();

router.post("/signup", signup);
