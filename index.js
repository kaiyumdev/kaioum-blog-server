import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";


mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
})
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!!`)
})

app.use('/api/user', userRoutes);
app.use("/api/auth", authRoutes);